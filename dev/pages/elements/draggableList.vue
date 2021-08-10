<template>

<div class="demo-draggable">
  <h2 id="au-draggable-list">Список с ручной сортировкой</h2>

  <au-draggable-list
    v-model="items"
    @updateList="updateList"
  />

  <pre>&lt;au-draggable-list
  v-model: Array
  search: String - ограничить список по вхождению search в title
  @updateList
/&gt;</pre>

  <pre>items: [
  {
    active: true,
    title: 'Название',
  },
]</pre>
</div>

</template>

<script>
export default {
  name: 'demo-popups',

  data() {
    return {
      items: [
        { active: true, title: 'Люди' },
        { active: true, title: 'События' },
        { active: true, title: 'Организации' },
        { active: false, title: 'Регионы' },
        { active: false, title: 'Страны' },
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
