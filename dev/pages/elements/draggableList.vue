<template>

<div class="demo-draggable">
  <h2 id="au-draggable-list">Список с ручной сортировкой</h2>

  <au-draggable-list
    v-model="items"
    @updateList="updateList"
  />

  <!-- <pre>&lt;au-side-popup
  open
  @close
&gt;
  slot
&lt;/au-side-popup&gt;</pre> -->
</div>

</template>

<script>
export default {
  name: 'demo-popups',

  data() {
    return {
      items: [
        { value: true, title: 'Люди' },
        { value: true, title: 'События' },
        { value: true, title: 'Организации' },
        { value: false, title: 'Регионы' },
        { value: false, title: 'Страны' },
      ],
    };
  },

  methods: {
    updateList(items) {
      this.items = items;
    },
  },
};
</script>
