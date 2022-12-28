<template>
  <div>
    <div class="site container classes">
      <Title title="Zajęcia w miejscu" />
      <div class="classes__cards">
        <div
          v-for="el in classesConfig"
          :key="el.title"
          class="classes__card"
          @click="()=>handleClick(el)"
        >
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
    <div
      v-if="showModal && selected"
      class="modal"
      role="dialog"
    >
      <div class="modal__overlay" @click="showModal=false">
        <transition appear name="pop">
          <div class="modal__content" @click.stop>
            <div class="modal__icon" @click="showModal = false">
              &times;
            </div>
            <h2>{{ selected.title }}</h2>
            <p v-html="selected.long" />
          </div>
        </transition>
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
      classesConfig,
      selected: null,
      showModal: false
    }
  },
  methods: {
    handleClick (el) {
      if (!el.long) { return }
      this.showModal = true
      this.selected = el
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
    justify-content: space-between;
  }

  &__card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex: 1 1 300px;
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
      height: 200px;
      overflow: hidden;
    }

    .card-title {
      text-align: center;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: .2s;
      object-fit: cover;
    }

    .button {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
}

</style>
