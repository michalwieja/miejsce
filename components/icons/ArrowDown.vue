<template>
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
  </svg>
</template>

<script>
export default {
  name: 'ArrowDown'
}
</script>

<style scoped>
svg {
  fill: rgba(255, 255, 255, 0.8);
  height: 48px;
  width: 48px;
  animation: float infinite 5s;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
