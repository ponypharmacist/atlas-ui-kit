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
      <!-- <template #header.name="{ item }">
        {{ item.key }}
      </template> -->
      <!-- <template #item.name="{ item }">
        {{ item.key }}
      </template> -->
    </au-table>

  <pre>&lt;au-table
  items: Array - данные
  columns: Array - список столбцов
  sort: Object - default {} | { key: 'name', direction: 'asc' }
  selectable

  no-data-text: String

  @runSort - срабатывает при изменении сортировки столбцов

  is-reset-checkbox
  is-loading
  page-settings: Object
&gt;
  &lt;template &#35;header.title="&lcub; item &rcub;"&gt; - slot - содержимое TH в столбце title
  &lt;template &#35;item.title="&lcub; item &rcub;"&gt; - slot - содержимое ячеек в столбце title
&lt;/au-table&gt;</pre>

  <p>Столбцы:</p>
  <pre>tableColumns: [{
  key: 'name',
  title: 'Пользователь',
  sortable: true,
  iconName: 'icon-avatar',  - иконка вместо имени столбца
  width: 10,                - в px
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
          name: 'Иванович Иван Иванов',
          birthDate: '12.08.1978',
          job: 'Маркетолог широкого профиля',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 2,
          name: 'Петров Петр Петрович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 3,
          name: 'Сидорович Семен Сидоров',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 4,
          name: 'Пупкин Василий Иванович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 5,
          name: 'Иванова Елена Ивановна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 6,
          name: 'Петрова Зинаида Петровна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 7,
          name: 'Сидорова Сайра Семеновна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 8,
          name: 'Собакевич Игорь Владимирович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 9,
          name: 'Груздев Полезай Вкузович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'от 09.08.2021',
        },
        {
          id: 10,
          name: 'Серый Гэндальф Сауронович',
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
        { key: 'version', title: 'Версия страницы', align: 'right' },
        { key: 'actions', title: 'Действия', iconName: 'icon-avatar' },
      ],

      currentSort: { key: 'name', direction: 'desc' },
    };
  },

  methods: {
    sort(sorting) {
      this.currentSort = sorting;
    },
  },
};
</script>
