<template>
  <div class="socials">
    <a href="https://www.instagram.com/" target="_blank">
      <svg
        id="Flat"
        height="256px"
        viewBox="0 0 256 256"
        width="256px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"
        />
      </svg>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100083269505886" target="_blank">
      <svg
        fill="#000000"
        height="50px"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Socials'
}
</script>

<style lang="scss">
.socials {
  display: flex;
  gap: 8px;
  cursor: pointer;
  opacity: .8;
  position: absolute;
  top: calc(var(--headerHeight) + 2vh);
  left: 0;

  svg {
    width: 48px;
    height: 48px;
    display: block;
    @media (max-width: 1200px) {
      width: 36px;
      height: 36px;
    }
  }

}
</style>
