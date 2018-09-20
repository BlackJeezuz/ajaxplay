<template>
  <div>
    <ul class="users-list">
      <li class="users-list__item" v-for="user in usersList" :key="`user-${user.id}`">
        <nuxt-link :to="`users/${user.id}`">{{ user.name }}</nuxt-link>
      </li>
    </ul>
    <div>Users: {{ users }}</div>
  </div>
</template>

<script>
import axios from 'axios-https-proxy-fix'
import https from 'https'

export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    axios.get('https://monex.e-cash.pro/_view/list_urls/0/', {
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    })
      .then((res) => {
        this.users = res.data.r.filter(item => item.includes('/ru/exchange/')).map(url => {
          let pageUrl = url.split('/ru/exchange/')[1]
          return {
            route: `exchanges/${pageUrl}`,
            payload: pageUrl
          }
        })
      })
  },
  computed: {
    usersList () {
      return [{
        id: '01',
        name: 'Ruslan'
      }, {
        id: '02',
        name: 'Eugene'
      }, {
        id: '03',
        name: 'Jovah'
      }]
    }
  }
}
</script>

<style>
</style>
