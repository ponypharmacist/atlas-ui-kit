<template>

<div class="demo-tables">
  <h2 id="au-table">Таблицы</h2>
  <div class="demo-item">
    <au-table
      :items="tableData"
      :columns="tableColumns"
      :sort="currentSort"
      selectable
      settings-icon
      no-data-text="По вашему запросу ничего не найдено"
      @runSort="sort"
      @settings="showPopup = !showPopup"
      @selectOne="selectOne"
      @selectAll="selectAll"
    >
      <!-- <template #header.name="{ item }">
        {{ item.key }}
      </template> -->
      <!-- <template #item.name="{ item }">
        {{ item.key }}
      </template> -->
      <!-- <template #massactions></template> -->
      <template #massactions>
       [ Слот #massactions - Инструменты для массовых действий ]
      </template>
    </au-table>

  <pre>&lt;au-table
  items: Array - данные
  columns: Array - список столбцов
  sort: Object - default {} | { key: 'name', direction: 'asc' }
  selectable

  settings-icon
  no-data-text: String

  @runSort - срабатывает при изменении сортировки столбцов
  @settings - срабатывате по клику на settings-icon
  @selectOne - возвращает id выбранного объекта для внешней обработки
  @selectAll - при клике на верховный чекбокс для общего (раз-)выделения

  is-reset-checkbox - ToDo: старое свойство
  is-loading - ToDo: старое свойство
  page-settings: Object - ToDo: старое свойство
&gt;
  &lt;template &#35;header.title="&lcub; item &rcub;"&gt; - slot, содержимое шапки столбца title
  &lt;template &#35;item.title="&lcub; item &rcub;"&gt;   - slot, содержимое ячеек в столбце title
  &lt;template &#35;massactions&gt; - slot, для массовых действий и кнопок с ними связанных
&lt;/au-table&gt;</pre>

  <p>Столбцы:</p>
  <pre>tableColumns: [{
  selected: false    - нужно, чтобы работали чекбоксы в таблице
  active: true,      - чтобы настраивать отображение столбцов через settings
  key: 'name',
  title: 'Адрес',
  sortable: true,
  width: 10,         - в px
  align: 'center'
}]</pre>
  </div>

  <au-side-popup
    :open="showPopup"
    @close="showPopup = !showPopup"
  >
    Настройки столбцов таблицы.

    <template #footer>
      <au-button class="self-right" label="Ок" @click="showPopup = !showPopup"/>
    </template>
  </au-side-popup>
</div>

</template>

<script>
import every from 'lodash/every';
import forEach from 'lodash/forEach';
import set from 'lodash/set';

export default {
  name: 'demo-tables',

  data() {
    return {
      showPopup: false,

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
          selected: false,
          id: 1,
          name: 'Иванович Иван Иванов',
          birthDate: '12.08.1978',
          job: 'Маркетолог широкого профиля',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 2,
          name: 'Петров Петр Петрович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 3,
          name: 'Сидорович Семен Сидоров',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 4,
          name: 'Пупкин Василий Иванович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 5,
          name: 'Иванова Елена Ивановна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 6,
          name: 'Петрова Зинаида Петровна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 7,
          name: 'Сидорова Сайра Семеновна',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 8,
          name: 'Собакевич Игорь Владимирович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 9,
          name: 'Груздев Полезай Вкузович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
        {
          selected: false,
          id: 10,
          name: 'Серый Гэндальф Сауронович',
          birthDate: '12.08.1978',
          job: 'Методолог',
          region: 'г. Москва',
          views: 'Нейтральный',
          version: 'Версия 3 от 09.08.2021',
        },
      ],

      tableColumns: [
        {
          active: true,
          key: 'name',
          title: 'ФИО',
          sortable: true,
        },
        {
          active: true,
          key: 'birthDate',
          title: 'Дата рождения',
          sortable: true,
        },
        {
          active: true,
          key: 'job',
          title: 'Должность',
          filterable: true,
        },
        {
          active: true,
          key: 'region',
          title: 'Регион',
        },
        {
          active: true,
          key: 'views',
          title: 'Позиция',
        },
        {
          active: true,
          key: 'version',
          title: 'Версия страницы',
          align: 'right',
        },
        {
          active: true,
          key: 'actions',
          title: 'Действия',
        },
      ],

      currentSort: { key: 'name', direction: 'desc' },
    };
  },

  methods: {
    sort(sorting) {
      this.currentSort = sorting;
    },

    selectOne(id) {
      const index = this.tableData.findIndex((item) => item.id === id);

      this.tableData[index].selected = !this.tableData[index].selected;
    },

    selectAll() {
      const allSelected = every(this.tableData, ['selected', true]);

      forEach(this.tableData, (item) => {
        set(item, 'selected', !allSelected);
      });
    },
  },
};
</script>
