<template>

<div class="demo-page">
  <sidebar :sidebar-items="sidebarItems"/>

  <div id="content">

  <h1>Библиотека Vue-компонентов</h1>
  <p>Установка:</p>
  <pre>yarn add @atlas/ui-kit</pre>
  <p>Подключение в файле main.js:</p>
  <pre>import atlasUiKit from '@atlas/ui-kit';
Vue.use(atlasUiKit);</pre>

  <demo-icons/>

  <demo-buttons/>

  <demo-checkbox/>

  <demo-inputs/>

  <demo-select/>

  <demo-dropdown-buttons/>

  <demo-filters/>

  <demo-draggable-list/>

  <h2 id="au-color-picker">Пипетка</h2>
  <div class="demo-item">
    <au-color-picker v-model="colorPicked"/>

  <pre>&lt;au-color-picker
  v-model
  small
  full-width
/&gt;</pre>
  </div>

  <demo-breadcrumbs/>

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

  <demo-tabs/>

  <demo-tables/>

  <h2 id="au-pagination">Пагинация</h2>
  <div class="demo-item">
    <au-pagination
      :page="1"
      :per-page="5"
      :total="45"
      :pages-count="9"
    />
  <pre>&lt;au-pagination
  page
  per-page
  toptal
  pages-count
  @changePage - возвращает новое значение страницы
  @changePerPage - новый размер страницы
/&gt;</pre>
  </div>

  <demo-popups/>

  <h2 id="au-user-popover">Поповеры</h2>
  <div class="demo-item">
    <au-user-popover :user="userObject" />
    <pre>&lt;au-user-popover
  user: { firstName, lastName, isOnline }
/&gt;</pre>
  </div>

  <div class="demo-item">
    <au-info-popover
     :blockedTransitions="[]"
    />
    <pre>&lt;au-info-popover
  blockedTransitions: Array
  placement: 'bottom'
  disabled
/&gt;</pre>
  </div>
  </div>
</div>

</template>

<script>
import Sidebar from './elements/sidebar.vue';
import DemoIcons from './elements/icons.vue';
import DemoButtons from './elements/buttons.vue';
import DemoCheckbox from './elements/checkbox.vue';
import DemoInputs from './elements/inputs.vue';
import DemoSelect from './elements/select.vue';
import DemoDropdownButtons from './elements/dropdownButtons.vue';
import DemoBreadcrumbs from './elements/breadcrumbs.vue';
import DemoTables from './elements/tables.vue';
import DemoTabs from './elements/tabs.vue';
import DemoFilters from './elements/filters.vue';
import DemoDraggableList from './elements/draggableList.vue';
import DemoPopups from './elements/popups.vue';

export default {
  name: 'demo-page',

  components: {
    Sidebar,
    DemoIcons,
    DemoButtons,
    DemoCheckbox,
    DemoInputs,
    DemoSelect,
    DemoDropdownButtons,
    DemoBreadcrumbs,
    DemoTables,
    DemoTabs,
    DemoFilters,
    DemoDraggableList,
    DemoPopups,
  },

  data() {
    return {
      // Sidebar
      sidebarItems: [
        { title: 'Формы' },
        { title: 'Иконки', alias: 'au-icon' },
        { title: 'Кнопка', alias: 'au-button' },
        { title: 'Чекбокс', alias: 'au-checkbox' },
        { title: 'Поле ввода', alias: 'au-input' },
        { title: 'Выпадающий список', alias: 'au-select' },
        { title: 'Кнопка-dropdown', alias: 'au-dropdown-button' },
        { title: 'Кнопка с выпадающим контентом', alias: 'au-dropdown-content-button' },
        { title: 'Быстрые фильтры', alias: 'au-filters-resizable' },
        { title: 'Список с ручной сортировкой', alias: 'au-draggable-list' },
        { title: 'Пипетка', alias: 'au-color-picker' },

        { title: 'Вывод информации' },
        { title: 'Хлебные крошки', alias: 'au-breadcrumbs' },
        { title: 'Лоадер/спиннер', alias: 'au-spinner' },
        { title: 'Вкладки, табы', alias: 'au-tabs' },
        { title: 'Таблицы', alias: 'au-table' },
        { title: 'Пагинация', alias: 'au-pagination' },
        { title: 'Поп-ап справа', alias: 'au-side-popup' },
        { title: 'Поповеры', alias: 'au-user-popover' },
      ],

      // Demo-values
      colorPicked: '#fa4444',
      userObject: {
        firstName: 'Ivan',
        lastName: 'Ivanoff',
        isOnline: true,
      },
    };
  },
};
</script>

<style lang="scss">
.demo-page {
  position: relative;
  display: flex;
  width: 100%;

  #content {
    height: 100vh;
    width: 100%;
    padding: 24px;
    border-left: thin solid #e1e1e1;
    overflow-y: scroll;
  }

  p {
    margin: 12px 0;
  }

  h1 {
    font-family: Ruda, Helvetica, Arial, sans-serif;
    font-weight: 500;
    padding: 24px 0 22px;
    font-size: 32px;
    line-height: 32px;
  }

  h2 {
    font-family: Ruda, Helvetica, Arial, sans-serif;
    font-weight: 500;
    padding: 32px 0 16px 0;
    font-size: 24px;
    line-height: 28px;
  }

  .demo-item {
    .au-input,
    .au-select {
      margin-bottom: 8px;
    }
  }

  pre {
    display: inline-block;
    min-width: 240px;
    max-height: 400px;
    overflow-y: auto;
    margin: 6px 12px 6px 0;
    padding: 8px 48px 8px 12px;
    border-radius: 10px;
    background-color: #282C34;
    color: #e9e9e9;
    font-family: monospace;
    font-size: 16px;

    &::selection {
      background-color: purple;
    }
  }

  code {
    padding: 4px 8px;
    font-family: monospace;
    font-size: 16px;
    background-color: #282C34;
    color: #e9e9e9;
    border-radius: 5px;
  }

  .d-flex {
    display: flex;
    flex-wrap: wrap;

    & > * {
      margin-right: 16px;
    }
  }

  .align-center {
    align-items: center;
  }

  .self-right {
    margin-left: auto;
  }

  .darker-background {
    padding: 12px;
    background-color: #999;
    border-radius: 10px;
  }
  .coloured-background {
    padding: 12px;
    background-color: #3f6ada;
    border-radius: 10px;
  }
}
</style>
