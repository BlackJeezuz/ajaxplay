import { encode, decode } from 'parseqs'
import ORM from '~/utils/services/orm'
import LOCALIZATION from '~/utils/services/localization'


export function $P (obj, key, getter, setter) {
    let DO = {enumerable: true, configurable: true}
    if (getter) DO['get'] = getter
    if (setter) DO['set'] = setter
    Object.defineProperty(obj, key, DO)
}

export function viewDate (date) {
    let monthNames = ['jan_ui', 'feb_ui', 'march_ui', 'apr_ui', 'may_ui', 'jun_ui', 'jul_ui', 'aug_ui', 'sep_ui', 'oct_ui', 'nov_ui', 'dec_ui']
    let datePublish = new Date(date)
    return [datePublish.getDate(), LOCALIZATION.ld(monthNames[datePublish.getMonth()]), datePublish.getFullYear()].join(' ')
}

export function padZero (number, len = 2) {
    var str = number.toString()
    var res = ''
    for ( var i = str.length; i < len; i++ ) {
        res += '0'
    }
    return res+str;
}
export function trimZeros (numStr) {
    return parseFloat(numStr).toString()
}

export function splitDigits (val) {
    let res = (val || 0).toString();
    res = res.split('.');
    res[0] = res[0].toString().split('').reverse().map(function(c, i) {
        if ( !i || i % 3) return c;
        return c + ' ';
    }).reverse().join('');
    return res.join('.');
}

export const ONE_DAY = 24 * 60 * 60 * 1000
export const ONE_WEEK = ONE_DAY * 7

function clearSeconds(dateObj) {
    dateObj.setMilliseconds(0);
    dateObj.setSeconds(0);
    return dateObj;
}

function clearMinutes(dateObj) {
    dateObj.setMinutes(0);
    dateObj.setHours(0);
    return dateObj;
}

export function clearTime(dateObj) {
    return clearMinutes(clearSeconds(dateObj));
}

export function formatDate(date, withTime, includeYear, includeSeconds) {
    if ( date == null || date.length == 0 ) return ''
    var dateInt = parseInt(date)
    if ( date == dateInt ) { date = dateInt }
    var fDate = new Date(date)
    var today = new Date()
    
    if ( fDate == 'Invalid Date' ) {
        try {
            var dtMap = obj.created_at.split(' ')
            var fDate = new Date(dtMap[0])
            dtMap     = dtMap[1].split(':')
            fDate.setHours(dtMap[0])
            fDate.setMinutes(dtMap[1])
        } catch(err) { fDate = today }
    }
    
    var dateString = [padZero(fDate.getDate()), (padZero(fDate.getMonth()+1)) ]
    
    if ( fDate.getFullYear() != today.getFullYear() || includeYear) {
        dateString.push(padZero(fDate.getFullYear(), 4))
    } else if ( withTime && fDate.getDate() == today.getDate() && fDate.getMonth() == today.getMonth() ) {
        dateString = []
    }
    
    dateString = dateString.join('/')
    if ( withTime ) {
        dateString += [' ', padZero(fDate.getHours()), ':', padZero(fDate.getMinutes())].join('')
        if ( includeSeconds ) {
            dateString += ':'+padZero(fDate.getSeconds())
        }
    }
    return dateString
}

export function ajax (method, url, data) {
    if (data && typeof(data) != 'string' && data.constructor != FormData) {
        data = JSON.stringify(data)
    }
    if (typeof(url) != 'string') { url = url.join('/') }
    return new Promise(function (resolve) {
        let req = new XMLHttpRequest()
        req.open(method, url, true)
        req.send(data)
        
        req.onreadystatechange = function() {
            if (req.readyState !== 4) return
            let resp = {}
            if (req.responseText) {
                resp = JSON.parse(req.responseText)
            }
            return resolve(resp)
        }
    })
}

export function exchangeUrlPart (inCur, outCur) {
    let inPs = inCur.paysystem.name
    let inFiat = inCur.fiatcurrency.name
    let outPs = outCur.paysystem.name
    let outFiat = outCur.fiatcurrency.name
    return `${inPs}_${inFiat}_to_${outPs}_${outFiat}`
}

export function decodeHashParams (str) {
    if (!str || !str.length) return {}
    if (str.startsWith('#')) return decode(str.slice(1))
    return decode(str)
}
export function encodeHashParams (params) {
    if (!params || !Object.keys(params).length) return ''
    return '#' + encode(params)
}

export function splitCamelCase (str) {
    return str.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ')
}

export function getInitialExchange () {
    let exchListByOrder = Object.values(ORM.model.exchange).sort((a, b) => a.order - b.order)
    let activeExchangeList = exchListByOrder.filter(ex => !ex.is_hidden && ex.is_active)
    return activeExchangeList.find(ex => ex.is_active_limits && ex.blockers === 0) || activeExchangeList[0]
}
