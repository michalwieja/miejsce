<template>
  <div class="site container people">
    <Title title="Ludzie Miejsca" />
    <div class="people__cards">
      <div v-for="person in peopleConfig" :key="person.name" class="people__card">
        <div>
          <img :alt="person.name" :src="`/ludzie/${person.img}`">
        </div>
        <div class="people__name">
          {{ person.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import peopleConfig from '../config/peopleConfig.js'

export default {
  name: 'Ludzie',
  components: {
    Title
  },
  data () {
    return {
      peopleConfig
    }
  }

}
</script>
<style lang="scss">

.people {
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;

    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;

    }
  }

  &__card {
    width: 100%;
    text-align: center;
  }

  &__name {
    font-size: 22px;
    font-weight: bold;
    font-family: 'league-spartan', sans-serif;

  }

  img {
    width: 50%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
}

.test {
  padding-bottom: 2rem
}
</style>
