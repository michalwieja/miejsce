<template>
  <div class="faq site">
    <div class="container">
      <Title title="Dla Twojej wygody zebraliśmy najczęściej powtarzające się pytania i odpowiedzi w jednym miejscu." />
      <Accordion :content="faqConfig" />
    </div>
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue'
import faqConfig from '../config/faqConfig.js'
import Title from '../components/Title.vue'

export default {
  name: 'Faq',
  components: {
    Title,
    Accordion
  },
  data () {
    return {
      faqConfig
    }
  }
}
</script>

<style lang="scss">
.faq {
  display: flex;
  align-items: flex-start;

  .accordion-item {
    max-width: 640px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
}

</style>
