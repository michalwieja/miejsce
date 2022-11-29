<template>
  <button :class="{secondary}" class="button" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    secondary: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    handleClick: {
      type: Function,
      default: () => {
      }
    }
  }
}
</script>
