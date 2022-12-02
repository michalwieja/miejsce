<template>
  <div class=" fh school site">
    <div class="school__content">
      <Title title="Szkoła" />
      <Accordion :content="faqConfig" />
    </div>
    <div class="school__photo" />
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue'
import faqConfig from '../config/faqConfig.js'
import Title from '../components/Title.vue'

export default {
  name: 'Szkola',
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
.school {
  display: flex;
  align-items: flex-start;
  padding-bottom: 10vh;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  & > div {
    width: 50%;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  &__content {
    padding-left: calc(calc(100vw - calc(min(1320px, 90%))) / 2);
  }

  &__photo {
    background: #ddd;
    height: 600px;
    background-image: url("~/assets/img/faq-cover.jpg");
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 1200px) {
      height: 300px
    }
  }
}

</style>
