<template>
  <div class="label">
    {{ title }}
    <svg
      fill="none"
      height="20"
      viewBox="0 0 500 20"
      width="500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#EAB213" height="20" width="20" />
      <rect fill="#EAB213" height="20" width="20" x="60" />
      <rect fill="#EAB213" height="20" width="20" x="120" />
      <rect fill="#EAB213" height="20" width="20" x="180" />
      <rect fill="#EAB213" height="20" width="20" x="240" />
      <rect fill="#EAB213" height="20" width="20" x="300" />
      <rect fill="#EAB213" height="20" width="20" x="360" />
      <rect fill="#EAB213" height="20" width="20" x="420" />
      <rect fill="#EAB213" height="20" width="20" x="480" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['title']
}
</script>

<style lang="scss" scoped>

.label {
  font-size: 60px;
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -4px;
  position: relative;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    overflow: hidden;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
}

svg {
  position: absolute;
  bottom: 0;
  margin-left: 40px;
  @media (max-width: 600px) {
    width: 150px;
    margin-left: 10px;
  }

}
</style>
