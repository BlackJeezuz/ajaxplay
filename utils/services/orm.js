import CONF from '../config'
import { AUTH } from './auth'
import { $P } from '../tools/helpers'
import { resolve, handlersDef, handlersBG } from './resolve_handlers'
import Vue from 'vue'

export const ORM = { model: {}, modelByName: {} }

const todoByModel = {}
const store = {}

ORM.onModel = function (model, func) {
    todoByModel[model] = todoByModel[model] || []
    todoByModel[model].push(func)
}

class ObjProxy {
    constructor (obj) {
        this._fetched = false
        if (obj) this._setData(obj)
    }

    _setData (obj) {
        this._obj = obj
        Object.keys(obj).map(name => $P(this, name, function () { if (this._obj) return obj[name] }))

        this._deleted = false
        this._fetched = true
    }

    _delete () {
        delete this._obj
        this._deleted = true
        this._fetched = false
    }
}

function processRow (model, fields, row, isDelete) {
    let data = { _model: model, _rel: {} }

    Object.keys(fields).map(key => { data[fields[key]] = row[key] })
    if (!data.id) return data // WORKAROUND FOR SYNTHETIC MODELS
    data._oid = model + '_' + data.id
    data._oname = model + '_' + data.name || data.id

    if (data.is_deleted && store[data.id]) {
        store[data.id]._delete()
        delete store[data.id]
        delete ORM.model[model][data._oid]
        return
    }

    if (todoByModel[model]) todoByModel[model].map(func => func(data))

    let obj = store[data.id] || new ObjProxy()
    obj._setData(data)
    store[data.id] = obj
    ORM.model[model] = ORM.model[model] || {}
    ORM.model[model][data._oid] = obj

    if (data.name) {
        ORM.modelByName[model] = ORM.modelByName[model] || {}
        ORM.modelByName[model][data._oname] = obj
        store[data._oname] = obj
    }
    return obj
}

function processResp (data, isDelete) {
    let resp = {
        _data: data,
        _models: [],
        _count: Infinity
    }
    if (!data) return resp

    resp._data = JSON.parse(data)
    if (resp._data.constructor === Object) return resp
    resp._data.map(function (el) {
        // if (!el.model || !el.fields || !el.fields.includes || !el.fields.includes('id')) return
        if (!el.model || !el.fields) return
        if (resp._count > el.count) resp._count = el.count

        let m = el.model
        resp._models.push(m)
        resp[m] = resp[m] || []

        el.data.map(row => resp[m].push(processRow(m, el.fields, row, isDelete)))
    })
    return resp
}

function ajaxReq (method, url, data, isDelete) {
    if (data && typeof data !== 'string' && data.constructor !== FormData) data = JSON.stringify(data)
    url = CONF.baseUrl + url

    return new Promise(function (resolve) {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, true)

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return

            let resp = {
                _req: {
                    method: method,
                    url: url,
                    data: data
                },
                _xhr: xhr,
                _raw: xhr.responseText
            }

            if (xhr.status === 401) {
                resp.exception = 'Unauth'
            } else if (xhr.status !== 200) {
                resp.exception = 'Network'
            } else if (xhr.getResponseHeader('X-jlx-status') === 'exception') {
                let parsed = JSON.parse(xhr.responseText).statusData || {}
                Object.assign(resp, parsed)
            } else {
                let parsed = processResp(xhr.responseText, isDelete)
                Object.assign(resp, parsed)
            }
            return resolve(resp)
        }
        xhr.send(data)
    })
}

ORM.view = function (url) {
    if (typeof url !== 'string') url = url.join('/')
    return ajaxReq('GET', url)
}

ORM.req = function (params) { // { model, method, selector, key, id, data }
    let url = CONF.apiPrefix
    if (AUTH.token) url += ['?token', AUTH.token].join('=')

    params.method = params.method || 'select'
    params.selector = params.selector || {}

    params.key = params.key || {}
    if (params.id) params.key['id'] = params.id
    Object.keys(params.key).map(k => { params.selector[k] = ['eq', params.key[k]] })
    delete params.key

    return ajaxReq('POST', url, params, params.method === 'delete')
}

ORM.O = function (oid) {
    if (!oid) return null
    if (parseInt(oid) !== oid) {
        let tmp = oid.split('_').slice(-1)[0]
        if (!parseInt(tmp)) return store[oid]

        oid = tmp
    }
    store[oid] = store[oid] || new ObjProxy()
    return store[oid]
}

ORM.res = (handlers) => resolve(handlers, handlersDef)
ORM.resBG = (handlers) => resolve(handlers, handlersBG)

Vue.prototype.$orm = ORM
