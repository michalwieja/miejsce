<template>
  <div>
    <Hero />
    <Szkola id="szkola" ref="school" />
    <StandOut ref="school" />
    <Ludzie id="ludzie" />
    <Zajecia id="zajecia" />
    <Faq id="faq" />
    <RekrutacjaKtw id="rekrutacja-ktw" />
    <Kontakt id="kontakt" />
  </div>
</template>

<script>
import Szkola from '../sections/szkola.vue'
import Ludzie from '../sections/ludzie.vue'
import StandOut from '../sections/standOut.vue'
import Faq from '../sections/faq.vue'
import Hero from './Hero.vue'
import Zajecia from './zajecia.vue'
import Kontakt from './kontakt.vue'
import RekrutacjaKtw from './rekrutacja-ktw.vue'

export default {
  name: 'IndexPage',
  components: {
    Faq,
    Kontakt,
    Zajecia,
    Ludzie,
    StandOut,
    Szkola,
    Hero,
    RekrutacjaKtw
  }
}
</script>
