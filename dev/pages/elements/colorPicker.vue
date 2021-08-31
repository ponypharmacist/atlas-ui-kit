<template>

<div class="demo-color-picker">
  <h2 id="au-color-picker">Пипетка</h2>
  <div class="demo-item">
    <au-color-picker v-model="colorPicked"/>

  <pre>&lt;au-color-picker
  v-model
  small
  full-width
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-color-picker',

  data() {
    return {
      colorPicked: '#fa4444',
    };
  },
};
</script>
