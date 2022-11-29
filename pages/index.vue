<template>
  <div class="hero">
    <div class="hero__img" />
    <div class="container">
      <Socials />
      <div class="hero__title desktop-only">
        <div class="hero__skew-1">
          Hybrydowa, alternatywna
        </div>
        <br>
        <div class="hero__skew-2">
          "szkoła" średnia w&nbsp;Katowicach
        </div>
      </div>
      <div class="hero__title mobile-only">
        <div>
          <div class="hero__skew-1">
            Hybrydowa
          </div>
        </div>
        <div>
          <div class="hero__skew-2">
            Alternatywna
          </div>
        </div>
        <div>
          <div class="hero__skew-1">
            "szkoła" średnia
          </div>
        </div>
        <div>
          <div class="hero__skew-2">
            w&nbsp;Katowicach
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Socials from '../components/Socials.vue'

export default {
  name: 'IndexPage',
  components: { Socials }
}
</script>
