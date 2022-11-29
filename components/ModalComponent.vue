<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="close" @click="$emit('close-modal')">
        &times;
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent'
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000da;
  z-index: 10;
}

.modal {
  text-align: center;
  background-color: white;
  min-height: 200px;
  min-width: 300px;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  padding: 60px 40px;
  border-radius: 20px;
  position: relative;
  margin: 10% 16px;

  @media (max-width: 900px) {
    padding: 60px 16px 20px;
    text-align: left;
  }
}

.close {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 32px;
  font-family: sans-serif;
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

</style>
