<template>
  <div class="faq">
    <FaqExpand
      v-for="faq in faqList"
      :key="faq.id"
      :answear="faq.answear"
      :question="faq.question"
    />
  </div>
</template>

<script>

import faqList from '../config/faqConfig.js'
import FaqExpand from './FaqExpand.vue'

export default {
  name: 'Faq',
  components: {
    FaqExpand

  },
  data () {
    return {
      faqList
    }
  }
}
</script>

<style>
.faq {
  padding-top: 50px;
}
</style>
