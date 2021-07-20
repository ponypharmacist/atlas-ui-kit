<template>

<button>
  <scope>Кнопка</scope>
</button>

</template>

<script>
import Vue from 'vue'

export default Vue.component('AuButton', {
  name: 'AuButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped></style>
