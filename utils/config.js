const CONF = { baseUrl: '' }

CONF.ONE_DAY = 24 * 60 * 60 * 1000
CONF.ONE_WEEK = CONF.ONE_DAY * 7

CONF.apiPrefix = '/_handler/api/'

CONF.AUTH = {
  sessionExpiryMultiplier: 0.5,
  safeLogoutMultiplier: 0.75,
  userActivityTimeout: 5000,
  refererexpire: CONF.ONE_DAY * 2
}

CONF.transStatus = {
  new: 0, // bill, cancel, renew // "новая""
  cancel: 10, // 2 кнопки: просто вернуться на обмены + renew // "отменена"
  old: 11, // то же что cancel
  in_error: 12, // "ошибка оплаты"
  refund_process: 13, // лоадер
  refund_error: 14, // текст + кнопка
  refund_ok: 15, // // кнопка
  payin: 50, // лоадер // "ожидает оплаты"
  paid: 100, // лоадер // "ожидает выплаты"
  partial: 105, // как expire
  frozen: 110, // refund(модалка) + описание про freeze ) "заморожена"
  expired: 120, // recalc, refund ( текст expired + две кнопки ) ""
  recalc_confirm: 121, // recalc_confirm, refund ( текст мол "вы согласны с новым курсом?" + две кнопки ) + таймер // "требует подтверждения"
  manual: 130, // текст //"заявка обрабатыется администратором"
  payout: 140, // лоадер //"ожидает выплаты"
  out_sys_error: 145, // лоадер //"ожидает выплаты"
  out_error: 150, // (ожидает действие пользователя) revise, refund //"ошибка"
  out_error2: 151, // то же что 150, но без refund
  out_partial: 160, // то же что 151
  finalizing: 199, // "завершается"
  finish: 200
}

CONF.contactType = {
  email: 0,
  phone: 1,
  telegram: 2,
  google: 3,
  viber: 4,
  ip: 50,
  account: 51
}

export default CONF
