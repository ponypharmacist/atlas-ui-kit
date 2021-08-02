<template>

<div class="demo-page">
  <sidebar :sidebar-items="sidebarItems"/>

  <div class="demo-content">
  <h1>Библиотека Vue-компонентов</h1>

  <h2 id="au-icon">Иконки</h2>
  <div class="demo-item">
    <p>По-умолчанию - иконка имеет родной цвет, если не указан color.</p>
    <p>Параметр <b>mask</b> принудительно делает иконку маской (нужно при создании компонентов в этой библиотеке, в обычном применении в проекте врядли пригодится).</p>
    <div class="d-flex align-center">
      <au-icon icon="mdi-wizard-hat" :size="24"/>
      <div> <code>&lt;au-icon icon="<b>mdi-wizard-hat</b>" size="24"/&gt;</code>
       - берет иконку '<b>wizard-hat.svg</b>' из @mdi/svg/svg</div>
    </div>

    <div class="d-flex align-center">
      <au-icon icon="icon-avatar" :size="24"/>
      <div> <code>&lt;au-icon icon="<b>icon-avatar</b>" size="24"/&gt;</code>
       - берет иконку '<b>icon-avatar.svg</b>' из @/assets/icons/ текущего проекта</div>
    </div>

    <div class="d-flex align-center">
      <au-icon icon="mdi-eye" :color="'#FF6C59'" :size="24"/>
      <div> <code>&lt;au-icon icon="mdi-eye" <b>color="#FF6C59"</b>/&gt;</code>
       - цвет</div>
    </div>
  </div>

  <h2 id="au-button">Кнопка</h2>
  <div class="demo-item">
    <div class="d-flex darker-background">
      <au-button icon="mdi-eye" label="icon='mdi-eye'"/>
      <au-button icon="mdi-eye" white label="white"/>
      <au-button icon="mdi-eye" bordered large label="large"/>
      <au-button white bordered label="white bordered"/>
      <au-button shadow label="shadow"/>
      <au-button icon="mdi-eye" link label="is link"/>
      <au-button icon="mdi-eye" link white label="is-link white icon"/>
      <au-button icon="mdi-eye" link red label="is-link red icon"/>
      <au-button
        red
        :is-loading="isLoading"
        label="red is-loading"
        icon="mdi-eye"
        @click="isLoading = !isLoading"
      />
    </div>

    <pre>&lt;au-button
  to: [Object, String]
  href: String
  tag: 'a | router-link | button ...'
  type="button | submit | reset"

  icon: String - 'mdi-eye | icon-eye'
  label: String - текст кнопки

  is-loading
  disabled

  link
  full-width
  bordered
  large
  shadow
  white
  red
/&gt;</pre>
  </div>

  <h2 id="au-input">Поле ввода</h2>
  <div class="demo-item">
    <au-input
      v-model="inputModel"
      placeholder="placeholder"
    />
    <au-input
      value="icon"
      icon="mdi-eye"
    />

    <au-input
      value="full-width"
      icon="mdi-eye"
      full-width
    />

    <au-input
      value="small"
      icon="mdi-eye"
      small
    />

    <au-input
      value="inputErrors"
      icon="mdi-eye"
      :inputErrors="[1]"
    />

    <au-input
      value="disabled"
      icon="mdi-eye"
      disabled
    />

    <au-input
      value="readonly"
      icon="mdi-eye"
      full-width
      readonly
    />

    <pre>&lt;au-input
  value: [String, Number, Array] {{ inputModel }}
  placeholder: String
  icon: String
  name: String
  input-errors: Array
  type: String
  mask: [String, Array, Function]

  required
  disabled
  readonly
  autofocus

  full-width
  small
  inverse
/&gt;

#icon - slot для кастомного элемента в области иконки</pre>
  </div>

  <h2 id="au-select">Выпадающий список</h2>
  <div class="demo-item">
    <au-select
      v-model="selectModel"
      :list="selectListDemo"
      value-field="title"
      id-field="id"
    />
    <au-select
      v-model="selectModel"
      :list="selectListDemo"
      value-field="title"
      id-field="id"
      multiselect
    />
    <au-select
      value="inverse"
      inverse
    />
    <au-select
      value="disabled"
      disabled
    />
    <au-select
      value="small"
      small
    />
    <au-select :placeholder="null" noDataText="`:placeholder='null' - если нужен пустой плейсхолдер`" />

    <pre>&lt;au-select
  value: [Number, String, Object, Array]
  list: Array
  placeholder: String | default: 'Выберите из списка' - null если хотим без
  no-data-text: String | default: 'Список пуст'
  id-field: String
  value-field: String

  return-object
  close-on-select

  multiselect
  disabled
  inverse
  small
  large - сейчас не поддерживается
</pre>
  </div>

  <h2 id="au-dropdown-button">Кнопка-dropdown</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-dropdown-button
        :list="[{ title: 'Элемент списка' }]"
        icon="mdi-eye"
      >
        Название
      </au-dropdown-button>

      <au-dropdown-button
        :list="[{ title: 'Элемент списка' }]"
        large
        icon="mdi-eye"
      >
        Название
      </au-dropdown-button>
    </div>

    <pre>&lt;au-dropdown-button
  list: Array - [{ title, ... }]
  icon: String

  large
&gt;
  Название (default slot)
  &lt;template #list&gt; (list slot)
/&gt;</pre>
  </div>

  <h2 id="au-dropdown-content-button">Кнопка с выпадающим контентом</h2>
  <div class="demo-item">
    <au-dropdown-content-button
      label="What, what!"
      :open="false"
      icon="mdi-eye"
    >
      <p style="padding: 16px;">Hello World</p>
    </au-dropdown-content-button>
    <pre>&lt;au-spinner
  label
  icon - передает иконку в au-icon
  large - для крупной au-button внутри компонента
/&gt;</pre>
  </div>

  <h2 id="au-color-picker">Пипетка</h2>
  <div class="demo-item">
    <au-color-picker v-model="colorPicked"/>

  <pre>&lt;au-color-picker
  v-model
  small
  full-width</pre>
  </div>

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

  <h2 id="au-tabs">Вкладки, табы</h2>
  <div class="demo-item">
    <au-tabs>
      <au-tab-item :id="1" name="Непрочитанные">
        Содержимое первой вкладки
      </au-tab-item>
      <au-tab-item :id="2" name="Все уведомления">
        Содержимое вкладки номер два
      </au-tab-item>
    </au-tabs>

  <pre>&lt;au-tabs&gt;
  &lt;au-tab-item
    id: Number | required
    name: String | required
    count: Number
  &gt;
    Содержимое первой вкладки
  &lt;/au-tab-item&gt;
&lt;/au-tabs&gt;</pre>
  </div>

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

  &lt;template &#35;item.title="&lcub; item &rcub;"&gt; - slot - содержимое ячеек в столбце title
&lt;/au-table&gt;</pre>
  </div>

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
  pages-count</pre>
  </div>

  <h2 id="au-user-popover">Поповеры</h2>
  <div class="demo-item">
    <au-user-popover :user="userObject" />
    <pre>&lt;au-user-popover
  user: { firstName, lastName, isOnline }</pre>
  </div>

  <div class="demo-item">
    <au-info-popover
     :blockedTransitions="[]"
    />
    <pre>&lt;au-info-popover
  blockedTransitions: Array
  placement: 'bottom'
  disabled</pre>
  </div>
  </div>
</div>

</template>

<script>
import Sidebar from './elements/sidebar.vue';

export default {
  name: 'demo-page',

  components: { Sidebar },

  data() {
    return {
      // Sidebar
      sidebarItems: [
        { title: 'Формы' },
        { title: 'Иконки', alias: 'au-icon' },
        { title: 'Кнопка', alias: 'au-button' },
        { title: 'Поле ввода', alias: 'au-input' },
        { title: 'Выпадающий список', alias: 'au-select' },
        { title: 'Кнопка-dropdown', alias: 'au-dropdown-button' },
        { title: 'Кнопка с выпадающим контентом', alias: 'au-dropdown-content-button' },
        { title: 'Пипетка', alias: 'au-color-picker' },

        { title: 'Вывод информации' },
        { title: 'Лоадер/спиннер', alias: 'au-spinner' },
        { title: 'Вкладки, табы', alias: 'au-tabs' },
        { title: 'Таблицы', alias: 'au-table' },
        { title: 'Пагинация', alias: 'au-pagination' },
        { title: 'Поповеры', alias: 'au-user-popover' },
      ],

      // Demo-values
      isLoading: true,
      inputModel: null,
      selectModel: null,
      selectListDemo: [
        { id: 1, title: 'Option One' },
        { id: 2, title: 'Option Two' },
        { id: 3, title: 'Option Three' },
        { id: 4, title: 'Option Four' },
      ],
      colorPicked: '#fa4444',
      userObject: {
        firstName: 'Ivan',
        lastName: 'Ivanoff',
        isOnline: true,
      },

      // Table
      tableData: [
        { name: 'Дмитрий' },
        { name: 'Not-Дмитрий' },
      ],
      tableColumns: [
        {
          value: 'name',
          name: 'Пользователь',
          sortable: true,
          iconName: 'icon-avatar',
          width: 150,
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

<style lang="scss" scoped>
.demo-page {
  position: relative;
  display: flex;
}

.demo-content {
  min-height: 100vh;
  width: 100%;
  padding: 24px;
  margin-left: 260px;
  border-left: thin solid #e1e1e1;
}

h1 {
  @include rudaExtraBold;
  padding: 24px 0 22px;
  font-size: 32px;
  line-height: 32px;
}

h2 {
  @include rudaExtraBold;
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

.darker-background {
  padding: 12px;
  background-color: #f1f1f1;
  border: thin solid #e1e1e1;
}
</style>
