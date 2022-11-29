<template>
  <div class="hero">
    <div
      class="hero__text"
      data-aos="faed-in"
      data-aos-duration="1000"
    >
      <div class="hero__title">
        Pracownia artystyczna <br>
        i kawiarnia
      </div>
      <div class="hero__subtitle">
        miejsce dla dzieci i&nbsp;dorosłych
      </div>
      <div class="hero__buttons">
        <NuxtLink to="/grafik">
          <CustomButton label="Grafik" secondary />
        </NuxtLink>
        <a href="https://www.booksy.com" target="_blank">
          <CustomButton label="Zapisz się" />
        </a>
      </div>
    </div>
    <div class="hero__photo">
      <Socials />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>

</style>
