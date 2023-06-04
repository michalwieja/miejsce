<template>
  <div>
    <Hero />
    <Szkola id="szkola" ref="school" />
    <Ludzie id="ludzie" />
    <Zajecia id="zajecia" />
    <!--    <Sponsorzy id="sponsorzy" />-->
    <RekrutacjaKtw id="rekrutacja-ktw" />
    <RekrutacjaKrk id="rekrutacja-krk" />
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
import RekrutacjaKtw from './rekrutacja-ktw.vue'
import RekrutacjaKrk from './rekrutacja-krk.vue'

export default {
  name: 'IndexPage',
  components: {
    Kontakt,
    // Sponsorzy,
    Zajecia,
    Ludzie,
    Szkola,
    Hero,
    RekrutacjaKtw,
    RekrutacjaKrk
  }
}
</script>
