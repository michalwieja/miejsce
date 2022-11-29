<template>
  <div
    class="section-title"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    <div class="section-title__title">
      {{ title }}
    </div>
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
