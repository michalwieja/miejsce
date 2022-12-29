<template>
  <div>
    <Hero />
    <Szkola id="szkola" ref="school" />
    <Ludzie id="ludzie" />
    <Zajecia id="zajecia" />
    <!--    <Sponsorzy id="sponsorzy" />-->
    <Rekrutacja id="rekrutacja" />
    <Kontakt id="kontakt" />
  </div>
</template>

<script>
import Szkola from '../sections/szkola.vue'
import Ludzie from '../sections/ludzie.vue'
import Hero from './Hero.vue'
import Zajecia from './zajecia.vue'
// import Sponsorzy from './sponsorzy.vue'
import Kontakt from './kontakt.vue'
import Rekrutacja from './rekrutacja.vue'

export default {
  name: 'IndexPage',
  components: {
    Rekrutacja,
    Kontakt,
    // Sponsorzy,
    Zajecia,
    Ludzie,
    Szkola,
    Hero
  }
}
</script>
