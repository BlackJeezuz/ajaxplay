import axios from 'axios'
import https from 'https'

export default function (context) {
  const agent = new https.Agent({  
    rejectUnauthorized: false
  })

  return axios.get('https://monex.e-cash.pro/_view/list_urls/0/', { httpsAgent: agent })
  .then((res) => {
    context.pages = res.data.r.filter(item => item.includes('/ru/exchange/')).map(url => {
      let pageUrl = url.split('/ru/exchange/')[1]
      return {
        route: pageUrl,
        payload: url
      }
    })
  })
}
