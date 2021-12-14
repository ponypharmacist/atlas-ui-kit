<template>

<div class="demo-draggable">
  <h2 id="au-draggable-list">Список с ручной сортировкой</h2>

  <au-input
    v-model="draggableSearch"
    label="Поиск по списку"
    small
    style="margin-bottom: 16px;"
  />

  <div class="d-flex align-center">
    <div style="width: 500px;">
      <au-draggable-list
        :value="items"
        :search="draggableSearch"
        @updateList="updateList"
      />
    </div>

    <div style="width: 500px;">
      <au-draggable-list
        :value="items"
        :search="draggableSearch"
        select-all
        @updateList="updateList"
      />
    </div>
  </div>

  <pre>&lt;au-draggable-list
  v-model: Array
  select-all
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
      draggableSearch: null,
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
