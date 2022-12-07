<template>
  <div class="site">
    <div class="container">
      <Title title="Sponsorzy" />
      <Swiper />
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import Swiper from '../components/Swiper.vue'

export default {
  name: 'Sponsorzy',
  components: {
    Swiper,
    Title

  }
}
</script>

<style scoped>

</style>
