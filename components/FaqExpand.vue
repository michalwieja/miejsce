<template>
  <div class="faq-row">
    <div class="faq-row__question" @click="handleOpen">
      {{ question }}
    </div>
    <transition name="fade">
      <div v-show="open" class="faq-row__answear">
        {{ answear }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FaqExpand',
  props: {
    question: {
      type: String
    },
    answear: {
      type: String
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    handleOpen () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">
.faq-row {

  border-left: 3px solid var(--primary);
  padding-left: 25px;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__question {
    font-weight: bold;
    font-size: 24px;
  }

  &__answear {
    line-height: 150%;
    max-width: 80%;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s linear;
  max-height: 100px;

}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
  max-height: 0;
}

</style>
