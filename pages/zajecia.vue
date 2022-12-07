<template>
  <div class="site container fh classes">
    <Title title="Zajęcia w miejscu" />
    <div class="classes__cards">
      <div v-for="el in classesConfig" :key="el" class="classes__card">
        <div class="card-img">
          <img :src="`/zajecia/${el.img}`" alt="">
        </div>
        <div class="card-title">
          {{ el.title }}
        </div>
        <CustomButton label="Więcej" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import classesConfig from '../config/classesConfig.js'

export default {
  name: 'Zajecia',
  components: { Title },
  data () {
    return {
      classesConfig
    }
  }
}
</script>

<style lang="scss">
.classes {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding-top: 50px;

  }

  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 0 1 300px;
    font-size: 22px;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    cursor: pointer;
    gap: 20px;

    &:hover img {
      transform: scale(1.05);
    }

    .card-img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: .2s;

    }

    .button {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
}

</style>
