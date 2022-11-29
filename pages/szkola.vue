<template>
  <div class=" fh school site">
    <div class="school__content">
      <h1>Szkoła</h1>
      <Accordion :content="faqConfig" />
    </div>
    <div class="school__photo" />
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue'
import faqConfig from '../config/faqConfig.js'

export default {
  name: 'Szkola',
  components: {
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
    background: #000;
    min-height: 300px;
    background-image: url("~/assets/img/hero-img.jpg");
    background-position: center;
    @media (max-width: 1200px) {
      flex: 1;
    }
  }

  h1 {
    text-transform: uppercase;
    font-size: 36px;
  }
}

</style>
