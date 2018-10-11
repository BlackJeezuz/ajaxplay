import axios from 'axios'
import https from 'https'

const agent = new https.Agent({
  rejectUnauthorized: false
})

export default () => {
  return axios.get('/_view/localization_ui/ru/', {
    baseURL: process.browser ? '' : 'https://acadm.e-cash.pro',
    httpsAgent: agent
  }).then(response => {
    return response.data.strings
  })
}
