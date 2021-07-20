<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { AuInput } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
   AuInput,
  }
});
</script>

<template>
  <div id="app">
    <au-input />
    <br>
    <au-button>Кнопуля</au-button>
  </div>
</template>
