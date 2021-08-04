<template>

<div class="demo-tables">
  <h2 id="au-table">Таблицы</h2>
  <div class="demo-item">
    <au-table
      :list="tableData"
      :columns="tableColumns"
      :current-sort="currentSort"
      no-data-text="По вашему запросу ничего не найдено"
      selectable
      @sort="sort"
    >
    </au-table>

  <pre>&lt;au-table
  list: Array - основные данные
  columns: Array - список столбцоы
  children-columns
  children-property
  selectable
  is-reset-checkbox
  is-loading
  active-route-tracker: Array
  no-data-text: String
  current-sort: Object - default {} | { field: 'name', dir: 'asc' }
  page-settings: Object
&gt;
  &lt;template &#35;item.title="&lcub; item &rcub;"&gt; - slot - содержимое ячеек в столбце title
&lt;/au-table&gt;</pre>

  <p>Столбцы:</p>
  <pre>tableColumns: [{
  value: 'name',
  name: 'Пользователь',
  sortable: true,
  iconName: 'icon-avatar',  - иконка вместо имени столбца
  width: 10,                - в процентах % от ширины таблицы
  align: 'center'
}]</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-tables',

  data() {
    return {
      // Table
      tableData: [
        { name: 'Дмитрий Шугарович', role: 'Аналитик' },
        { name: 'Владислав Никсин', role: 'Редактор' },
      ],
      tableColumns: [
        {
          value: 'name',
          name: 'Пользователь',
          sortable: true,
          iconName: 'icon-avatar',
          width: 15,
        },
        {
          value: 'role',
          name: 'Роль',
        },
      ],
      currentSort: { field: 'name', dir: 'desc' },
    };
  },

  methods: {
    sort(sorting) {
      this.currentSort = sorting;
    },
  },
};
</script>
