<template>
  <div class="standOut site">
    <div class="standOut__photo" />
    <div class="standOut__content">
      <Title title="Co nas wyróżnia?" />
      <Accordion :content="standOutConfig" />
    </div>
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue'
import standOutConfig from '../config/standOutConfig.js'
import Title from '../components/Title.vue'

export default {
  name: 'StandOut',
  components: {
    Title,
    Accordion
  },
  data () {
    return {
      standOutConfig
    }
  }
}
</script>

<style lang="scss">
.standOut {
  display: flex;
  align-items: flex-start;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  & > div {
    width: 50%;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  &__content {
    overflow: hidden;
    padding-left: 2rem;

    @media (max-width: 1200px) {
      padding-left: calc(calc(100vw - calc(min(1320px, 90%))) / 2);
      padding-right: calc(calc(100vw - calc(min(1320px, 90%))) / 2);
    }
  }

  &__photo {
    height: 600px;
    background-image: url("~/assets/img/cover_1.jpg");
    background-position: center 33%;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1200px) {
      height: 300px
    }
  }
}

</style>
