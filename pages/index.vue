<template>
  <div>
    <Hero />
    <Szkola id="szkola" ref="school" />
    <Ludzie id="ludzie" />
    <Zajecia id="zajecia" />
    <RekrutacjaKtw id="rekrutacja-ktw" />
    <Kontakt id="kontakt" />
  </div>
</template>

<script>
import Szkola from '../sections/szkola.vue'
import Ludzie from '../sections/ludzie.vue'
import Hero from './Hero.vue'
import Zajecia from './zajecia.vue'
import Kontakt from './kontakt.vue'
import RekrutacjaKtw from './rekrutacja-ktw.vue'

export default {
  name: 'IndexPage',
  components: {
    Kontakt,
    Zajecia,
    Ludzie,
    Szkola,
    Hero,
    RekrutacjaKtw
  }
}
</script>
