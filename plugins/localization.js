import axios from 'axios'
export default ({ app, store }) => {
  return axios.get('https://acadm.e-cash.pro/_view/localization_ui/ru/').then((response) => {
    // eslint-disable-next-line
    app.i18n.setLocaleMessage('ru', response.data.strings)
  })
}
