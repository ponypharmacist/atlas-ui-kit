<template>

<div class="demo-filters">
  <h2 id="au-filters-resizable">Быстрые фильтры</h2>
  <div class="demo-item">
    <au-filters-resizable v-model="items"/>
  </div>
  <p>Работают как чекбоксы. Кнопки, которые не вошли в строку по ширине, прячутся в выпадающий список (кнопка [...] справа).</p>

  <pre>&lt;au-filters-resizable
    v-model: Array | { value: false, title: 'Актуальные' }
/&gt;</pre>
</div>

</template>

<script>
export default {
  name: 'demo-filters',

  data() {
    return {
      items: [
        { value: false, title: 'Актуальное' },
        { value: false, title: 'Dinosaur' },
        { value: false, title: 'Air balloon' },
        { value: false, title: 'Lime juice' },
        { value: false, title: 'List item' },
        { value: false, title: 'Dinosaur' },
        { value: false, title: 'Air balloon' },
        { value: false, title: 'Lime juice' },
        { value: false, title: 'List item' },
        { value: false, title: 'Dinosaur' },
        { value: false, title: 'Air balloon' },
        { value: false, title: 'Lime juice' },
        { value: false, title: 'List item' },
        { value: false, title: 'Dinosaur' },
        { value: false, title: 'Air balloon' },
        { value: false, title: 'Lime juice' },
      ],
    };
  },
};
</script>
