<template>
  <div>
    <div>Exchange: {{ $route.params }}</div>
    <div>Params:</div>
    <div v-for="(info, index) in content" :key="`par-${index}`">
      {{ index }} : {{ info || 'null' }}
    </div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, eius maiores provident quo iure facere maxime sequi, velit voluptates suscipit libero doloribus totam optio at earum? Hic, rerum. Recusandae, enim.</p>
    <p>Magnam modi doloribus officia qui nam doloremque, praesentium ab nesciunt, eaque cupiditate sed minima adipisci. Repellendus magni dicta obcaecati reiciendis reprehenderit quasi et modi neque at, ipsum quam recusandae rerum.</p>
    <p>Sunt magnam quibusdam perferendis ex id obcaecati est praesentium consectetur consequuntur esse molestias, at cupiditate distinctio error possimus facere accusantium, eveniet, vel vero nobis nam. Ut at autem molestiae iusto?</p>
    <p>Magni accusantium dolor aspernatur eveniet. Dolorem quasi quos hic cum ut? Debitis dolorem veritatis sint, alias iste dicta id ipsa porro, reprehenderit eveniet dolor incidunt sed recusandae, nisi odio voluptatibus.</p>
    <p>Numquam temporibus provident natus minus ducimus molestias, nemo sed ut vitae dicta beatae, porro laudantium doloremque. A minus, nesciunt commodi modi in iusto excepturi vero debitis voluptates? Illo, mollitia quidem!</p>
  </div>
</template>

<script>
import axios from 'axios-https-proxy-fix'
import https from 'https'

export default {
  data () {
    return {
      content: []
    }
  },
  created () {
    axios.get(`https://monex.e-cash.pro/_view/get_page/ru/3/${this.$route.params.exchange}`, {
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
    }).then(res => {
      this.content = res.data[0].data[0]
    })
  }
}
</script>

<style>
</style>
