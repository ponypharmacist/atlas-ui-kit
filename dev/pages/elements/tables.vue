<template>

<div class="demo-tables">
  <h2 id="au-table">Таблицы</h2>
  <div class="demo-item">
    <au-table
      :items="tableData"
      :columns="tableColumns"
      :sort="currentSort"
      no-data-text="По вашему запросу ничего не найдено"
      selectable
      @runSort="sort"
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

      // tableData: [
      //   { name: 'Дмитрий Шугарович', role: 'Аналитик' },
      //   { name: 'Владислав Никсин', role: 'Редактор' },
      // ],
      // tableColumns: [
      //   {
      //     value: 'name',
      //     name: 'Пользователь',
      //     sortable: true,
      //     iconName: 'icon-avatar',
      //     width: 15,
      //   },
      //   {
      //     value: 'role',
      //     name: 'Роль',
      //   },
      // ],

      tableData: [
        {
          id: 1,
          name: 'Абаджян Артур Грайрович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 2,
          name: 'Абазов Хадис Владимирович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 3,
          name: 'Абакаров Абакар Рабаданович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 4,
          name: 'Абакаров Ибрагим Лулуевич',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 5,
          name: 'Абасмирзоев Заур Шидибегович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 6,
          name: 'Абасов Магомедмирза Сераджунович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 7,
          name: 'Абашев Альмир Рашидович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 8,
          name: 'Абдуллаев Абдул Рамазанович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 9,
          name: 'Абракова Фатима Расуловна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 10,
          name: 'Абрамович Александра Михайловна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
      ],

      tableColumns: [
        { key: 'name', title: 'ФИО', sortable: true },
        { key: 'birthDate', title: 'Дата рождения', sortable: true },
        { key: 'job', title: 'Должность', filterable: true },
        { key: 'region', title: 'Регион' },
        { key: 'views', title: 'Позиция' },
        { key: 'version', title: 'Версия страницы' },
        { key: 'actions', title: 'Действия' },
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
