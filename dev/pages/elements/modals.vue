<template>

<div class="demo-modals">
  <h2 id="au-modal">Модальное окно</h2>
  <div class="demo-item">
    <au-button @click="showModal = !showModal" label="Показать модальное окно"/>
  </div>

  <au-modal v-model="showModal">
    <h2 style="padding: 10px 0 0;">Привет</h2>
    <p>Я - модальное окно. Закрой меня скорее.</p>
  </au-modal>

  <pre>&lt;au-modal
  v-model
&gt;
  slot
  #activator - слот активатора
&lt;/au-modal&gt;</pre>
</div>

</template>

<script>
export default {
  name: 'demo-modals',

  data() {
    return {
      showModal: false,
    };
  },
};
</script>
