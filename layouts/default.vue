<template>
  <div class="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MT48P7MP"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Default',
  components: {
    Footer,
    Header
  }

}
</script>
