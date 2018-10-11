import CONF from '../config'
import { ORM, LOCALIZATION } from './'
import { $P, decodeHashParams, encodeHashParams } from '../tools/helpers'
import { debounce } from 'lodash'
import Vue from 'vue'

export const AUTH = {}
let userActivityTracked = false
let sessionTimerId = null

const onExpireLogout = CONF.onExpireLogout || function () {
    let hashParams = decodeHashParams(window.location.hash)
    hashParams.expired = true
    window.location.replace(window.location.pathname + encodeHashParams(hashParams))
}

class AuthProxy {
    constructor (name) {
        this._ap_name = name
        let obj = JSON.parse(window.localStorage.getItem(this._ap_name))
        if (obj) this._set(obj)
        else this.isLogged = false
    }

    _set (obj) {
        this._ap_obj = obj
        window.localStorage.setItem(this._ap_name, JSON.stringify(obj))
        Object.keys(obj).map(key => $P(this, key, function () { if (this._ap_obj) return this._ap_obj[key] }))
        this.isLogged = true
    }

    _drop () {
        delete this._ap_obj
        window.localStorage.removeItem(this._ap_name)
        this.isLogged = false
    }
}

let onActivity = debounce(function () {
    clearTimeout(sessionTimerId)
    if (!AUTH.sess.lvl) return
    let renewTime = AUTH.sess.ctime + CONF.AUTH.sessionExpiryMultiplier * (AUTH.sess.expiry - AUTH.sess.ctime)
    let now = new Date() * 1
    if (now > renewTime) AUTH.renew()

    let inactiveTimeout = CONF.AUTH.safeLogoutMultiplier * (AUTH.sess.expiry - now) - CONF.AUTH.userActivityTimeout
    sessionTimerId = setTimeout(function() {
        AUTH.logout(true)
    }, inactiveTimeout)
}, CONF.AUTH.userActivityTimeout)

function userActivity () {
    if (userActivityTracked) return
    ['click', 'scroll', 'mousemove', 'keydown'].map(evName => window.addEventListener(evName, onActivity))
    userActivityTracked = true
}

function processAuth (res) {
    if (res.exception) return res
    if (!res.session || !res.session[0]) throw new Error('AUTH FAILED!')
    AUTH.sess._set(res.session[0])
    if (res.user && res.user[0]) {
        AUTH.user._set(res.user[0])
        window.localStorage.setItem('email', AUTH.user.email)
        if (CONF.onAuthUserSet) CONF.onAuthUserSet(AUTH.user)
    }

    userActivity()
    return res
}

AUTH.dropAuth = function (res) {
    AUTH.sess._drop()
    AUTH.user._drop()
    return res
}

function authReq (method, data) {
    if (!data.email && !data.phone) return
    if (data.email) data.email = data.email.toLowerCase()
    return ORM.req({model: 'auth', method: method, data: data}).then(ORM.res({ok: processAuth, unknown: resp => resp}))
}

AUTH.logout = function (isExpired) {
    let isWasLogged = AUTH.user.isLogged
    return ORM.req({model: 'auth', method: 'logout'}).then(() => {
        AUTH.dropAuth()
        if (!isWasLogged) return
        if (isExpired) {
            onExpireLogout()
        }
        window.location.reload(true)
    }) 
}
AUTH.login = function (data) { return authReq('login', data) }
AUTH.forgot = function (data) { return authReq('forgot', data) }
AUTH.register = function (data) { return authReq('register', data) }

AUTH.renew = function () {
    let now = new Date() * 1
    if (AUTH.sess.expiry < now) {
        return AUTH.logout(true)
    }

    return ORM.req({model: 'auth', method: 'renew'}).then(ORM.res({ok: processAuth}))
}

AUTH.initReferer = function (refereruid) {
    const now = Date.now()
    const expiration = now + CONF.AUTH.refererexpire
    
    if ((!AUTH.user.lvl || AUTH.user.id !== parseInt(refereruid)) && window.localStorage.getItem('refereruid') !== refereruid ) {
        window.localStorage.setItem('refereruid', refereruid)
        window.localStorage.setItem('refererexpire', expiration)
    }
    clearReferer()
}

function clearReferer () {
    const now = Date.now()
    const refererexpire = parseInt(window.localStorage.getItem('refererexpire'))
    const refereruid = parseInt(window.localStorage.getItem('refereruid'))

    if (!refererexpire && !refereruid) return

    function clear () {
        window.localStorage.removeItem('refereruid')
        window.localStorage.removeItem('refererexpire')
    }

    if (now > refererexpire) {
        clear()
        return
    }
    setTimeout(clear, refererexpire - now + 100) // 100 - погрешность
}

function init () {
    AUTH.sess = new AuthProxy('currentSession')
    AUTH.user = new AuthProxy('currentUser')
    $P(AUTH, 'lvl', function () { return AUTH.sess.lvl })
    $P(AUTH, 'token', function () { return AUTH.sess.token })
    if (AUTH.lvl) userActivity()
    clearReferer()
}
init()
Vue.prototype.$auth = AUTH
