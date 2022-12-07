<template>
  <div class="site container fh">
    <Title title="Ludzie Miejsca" />
    <div v-for="person in peopleConfig" :key="person.name" class="test">
      {{ person.name }}
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
<style>
.test {
  padding-bottom: 2rem
}
</style>
