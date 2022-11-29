<template>
  <footer class="footer">
    <div class="container">
      Copyright &copy; MW {{ currentDate.getFullYear() }}
      All rights reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>
