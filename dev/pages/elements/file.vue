<template>

<div class="demo-date">
  <h2 id="au-file">Файл</h2>
  <div class="demo-item">
    <div>
      <au-file
        v-model="value"
      />
      <au-file
        v-model="value"
        disabled
      />
    </div>

    <pre>&lt;au-file
  v-model
  label

  multiple
  accept
  disabled
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-file',

  data() {
    return {
      value: null,
    };
  },
};
</script>
