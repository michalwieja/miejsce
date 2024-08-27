<template>
  <div>
    <div class="site container people">
      <Title title="Ludzie Miejsca" />
      <div class="people__cards">
        <div
          v-for="person in peopleConfig"
          :key="person.name"
          class="people__card"
          @click="()=>handleClick(person)"
        >
          <div>
            <img :alt="person.name" :src="`/ludzie/${person.img}`">
          </div>
          <div class="people__name">
            {{ person.name }}
          </div>
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
            <h2>{{ selected.name }}</h2>
            <p v-html="selected.long" />
          </div>
        </transition>
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
      peopleConfig,
      showModal: false,
      selected: null
    }
  },
  methods: {
    handleClick (el) {
      this.showModal = true
      this.selected = el
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
    cursor: pointer;
    filter: grayscale(1);
    transition: .3s;;

    &:hover {
      filter: grayscale(0);
    }
  }

  &__name {
    font-size: 22px;
    font-weight: bold;
    font-family: 'league-spartan', sans-serif;
  }

  img {
    width: 100%;
    background: #0F7974;
  }
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  &__overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    background: white;
    width: 50%;
    border-radius: 40px;
    padding: 40px 40px 72px;
    @media (max-width: 1200px) {
      width: 90%;
      padding: 20px 20px 44px;
      font-size: 14px;
    }
  }

  &__icon {
    display: flex;
    justify-content: flex-end;
    font-size: 32px;
    line-height: 1;
    cursor: pointer;
    @media (max-width: 1200px) {
      font-size: 24px;
    }
  }

  p {
    margin-top: 20px;
    line-height: 150%;
  }
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
