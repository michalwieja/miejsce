<template>
  <div>
    <Hero />
    <Szkola id="szkola" ref="school" />
    <Ludzie id="ludzie" />
    <Zajecia id="zajecia" />
    <Sponsorzy id="sponsorzy" />
    <Kontakt id="kontakt" />
  </div>
</template>

<script>
import Szkola from '../sections/szkola.vue'
import Ludzie from '../sections/ludzie.vue'
import Hero from './Hero.vue'
import Zajecia from './zajecia.vue'
import Sponsorzy from './sponsorzy.vue'
import Kontakt from './kontakt.vue'

export default {
  name: 'IndexPage',
  components: {
    Kontakt,
    Sponsorzy,
    Zajecia,
    Ludzie,
    Szkola,
    Hero
  }
}
</script>
