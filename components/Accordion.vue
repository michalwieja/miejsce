<template>
  <dl class="accordion box" role="presentation">
    <accordion-item
      v-for="item in content"
      :key="item.id"
      :group-id="groupId"
      :item="item"
      :multiple="multiple"
    />
  </dl>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      groupId: null
    }
  },
  mounted () {
    this.groupId = this.$el.id
  }
}
</script>

<style scoped>

</style>
