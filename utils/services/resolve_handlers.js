import { Bus } from '@/engine/jpop'
import { Auth2 as modalAuth2 } from '@/components/popups'
import { ORM, AUTH } from './'

export function resolve (hCustom, hDefault) {
    let handlers = { ...hDefault, ...hCustom }
    return (resp) => {
        resp._handlers = handlers
        if (!resp.exception) {
            return handlers.ok(resp)
        }
        if (handlers[resp.exception]) return handlers[resp.exception](resp)
        return handlers.unknown(resp)
    }
}

export function auth2modal (resp) {
    return new Promise(resolve => {
        Bus.$open({
            component: modalAuth2,
            propsData: {resp: resp, resolve: resolve}
        })
    }).then(ORM.res(resp._handlers))
}

export const handlersBG = {
    ok: (resp) => resp,
    Auth2Required: auth2modal,
    Auth2Fail: (resp) => {
        Bus.$info({ text: 'auth2_fail' })
        return Object.assign(resp, {exception: 'reject', msg: 'auth2fail'})
    },
    Unauth: (resp) => AUTH.logout(true),
    unknown: (resp) => { return Object.assign(resp, {exception: 'reject'}) }
}

export const handlersDef = { 
    ...handlersBG,
    unknown: (resp) => { return Object.assign(resp, {exception: 'reject', msg: 'unknown_error'}) }
}
