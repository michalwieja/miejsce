<template>
  <div :id="groupId + '-' + item.id" :class="{'is-active': item.active}" class="accordion-item">
    <dt class="accordion-item-title">
      <button class="accordion-item-trigger" @click="toggle">
        <h4 class="accordion-item-title-text">
          {{ item.title }}
        </h4>
        <span class="accordion-item-trigger-icon" />
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <br>
        <div class="accordion-item-details-inner" v-html="item.details" />
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: ['item', 'multiple', 'groupId'],
  methods: {
    toggle (event) {
      if (this.multiple) {
        // eslint-disable-next-line vue/no-mutating-props
        this.item.active = !this.item.active
      } else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) {
            item.item.active = !item.item.active
          } else {
            item.item.active = false
          }
        })
      }
    },

    startTransition (el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition (el) {
      el.style.height = ''
    }
  }
}
</script>

<style scoped>

</style>
