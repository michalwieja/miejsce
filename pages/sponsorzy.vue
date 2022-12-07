<template>
  <div>
    <div class="site">
      <div class="container">
        <Title title="Sponsorzy" />
      </div>
      <Swiper />
    </div>
  </div>
</template>

<script>
import Swiper from '../components/Swiper.vue'
import Title from '../components/Title.vue'

export default {
  name: 'Sponsorzy',
  components: {
    Title,
    Swiper
  }
}
</script>
