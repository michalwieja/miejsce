<template>
  <div class="hero">
    <div class="hero__img" />
    <div class="container">
      <Socials />
      <div>
        <div class="hero__title desktop-only">
          <div class="hero__skew-1">
            Autorskie Liceum
          </div>
          <br>
          <div class="hero__skew-2">
            w&nbsp;Katowicach
          </div>
        </div>
        <div class="hero__title mobile-only">
          <div>
            <div class="hero__skew-1">
              Autorskie
            </div>
          </div>
          <div>
            <div class="hero__skew-2">
              Liceum
            </div>
          </div>
          <div>
            <div class="hero__skew-1">
              w&nbsp;Katowicach
            </div>
          </div>
        </div>
        <div class="hero__cta">
          <CustomButton
            label="Skontaktuj się z nami"
            :handle-click="scrollToContact"
          />
        </div>
      </div>
    </div>
    <div class="hero__arrow-down">
      <ArrowDown />
    </div>
  </div>
</template>

<script>
import Socials from '../components/Socials.vue'
import ArrowDown from '../components/icons/ArrowDown.vue'
import CustomButton from '../components/CustomButton.vue'

export default {
  name: 'Hero',
  components: {
    ArrowDown,
    Socials,
    CustomButton
  },
  methods: {
    scrollToContact () {
      const kontaktSection = document.getElementById('kontakt')
      if (kontaktSection) {
        kontaktSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.hero__cta {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
</style>
