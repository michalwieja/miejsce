<template>
  <div class="school site">
    <div class="school__content">
      <Title title="Czego możesz spodziewać się w Miejscu?" />
      <Accordion :content="expectConfig" />
    </div>
    <div class="school__photo" />
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue'
import expectConfig from '../config/expectConfig.js'
import Title from '../components/Title.vue'

export default {
  name: 'Szkola',
  components: {
    Title,
    Accordion
  },
  data () {
    return {
      expectConfig
    }
  }
}
</script>

<style lang="scss">
.school {
  display: flex;
  align-items: flex-start;

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

    @media (max-width: 1200px) {
      padding-right: calc(calc(100vw - calc(min(1320px, 90%))) / 2);
    }
  }

  &__photo {
    height: 600px;
    background-image: url("~/assets/img/cover_2.webp");
    background-position: center 20%;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1200px) {
      height: 300px
    }
  }
}

</style>
