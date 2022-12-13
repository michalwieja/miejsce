<template>
  <div>
    <div class="site">
      <div class="container">
        <Title title="Sponsorzy" />
      </div>
      <Swiper :data="sponsors" />
    </div>
  </div>
</template>

<script>
import Swiper from '../components/Swiper.vue'
import Title from '../components/Title.vue'

const sponsors = [
  { label: 'Szkola w chmurze' },
  { label: 'Support' },
  { label: 'NDS' },
  { label: 'Szkola w chmurze' },
  { label: 'Support' },
  { label: 'NDS' }
]

export default {
  name: 'Sponsorzy',
  components: {
    Title,
    Swiper
  },
  data () {
    return {
      sponsors
    }
  }
}
</script>
