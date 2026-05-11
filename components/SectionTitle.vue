<template>
  <div
    class="section-title"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <div class="section-title__title">
      {{ title }}
    </div>
    <div class="section-title__bar" />
    <div class="section-title__subtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.section-title {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;

  &__title {
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: $fz40;
    color: $black;
    letter-spacing: -1px;
    line-height: 1.15;
  }

  &__bar {
    width: 56px;
    height: 5px;
    background: $primaryColor;
    border-radius: 3px;
    margin: 12px auto 14px;
  }

  &__subtitle {
    font-size: $fz18;
    color: lighten($black, 25%);
    font-weight: 400;
  }
}
</style>
