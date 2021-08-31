<template>

<div class="demo-spinner">
  <h2 id="au-spinner">Лоадер/спиннер</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-spinner color="red"/>
      <au-spinner color="red" type="fading-circle"/>
    </div>
    <pre>&lt;au-spinner
  color="red" - для "dots"
  type="dots | fading-circle"
  size
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-spinner',
};
</script>
