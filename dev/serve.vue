<template>

<div id="app">
  <demo-page/>
</div>

</template>

<script>
import Vue from 'vue';
import DemoPage from './pages/demo.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: { DemoPage },
  created() {
    document.title = 'UI Kit';
  },
});
</script>
