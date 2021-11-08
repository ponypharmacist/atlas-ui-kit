<template>

<div v-if="editor" class="au-editor-toolbar">
  <template
    v-for="(item, key) in toolbarSchema"
  >
    <!-- Группы кнопок -->
    <div
      v-if="item.children"
      :key="key"
      class="toolbar-item toolbar-parent"
    >
      <au-icon :icon="`mdi-${item.icon}`" :size="iconSize" :color="iconColor"/>

      <div class="toolbar-children">
        <div
          v-for="subitem in item.children"
          :key="subitem.name"
          :class="['toolbar-item', { 'is-active': editor.isActive(key) }, subitem.icon]"
          :title="subitem.title || ''"
          :disabled="isDisabled(subitem.command)"
          @click="runCommand(subitem.command)"
        >
          <au-icon :icon="`mdi-${subitem.icon}`" :size="iconSize" :color="iconColor"/>
        </div>
      </div>
    </div>

    <!-- Единичные кнопки -->
    <div
      v-else
      :key="key"
      :class="['toolbar-item', { 'is-active': editor.isActive(key) }, item.icon]"
      :title="item.title || ''"
      @click="runCommand(item.command)"
    >
      <au-icon :icon="`mdi-${item.icon}`" :size="iconSize" :color="iconColor"/>
    </div>
  </template>
</div>

</template>

<script>
export default {
  name: 'au-editor-toolbar',

  props: {
    editor: {
      type: Object,
      default: null,
    },
    schema: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      iconSize: 22,
      iconColor: '#000',

      defaultSchema: {
        // undo: {
        //   icon: 'undo',
        //   command: 'undo',
        // },
        // redo: {
        //   icon: 'redo',
        //   command: 'redo',
        // },
        bold: {
          icon: 'format-bold',
          command: 'toggleBold',
          title: 'Полужирный',
        },
        italic: {
          icon: 'format-italic',
          command: 'toggleItalic',
          title: 'Курсивный',
        },
        strike: {
          icon: 'format-strikethrough',
          command: 'toggleStrike',
          title: 'Зачеркнутый',
        },
        bulletList: {
          icon: 'format-list-bulleted',
          command: 'toggleBulletList',
          title: 'Маркированый список',
        },
        orderedList: {
          icon: 'format-list-numbered',
          command: 'toggleOrderedList',
          title: 'Нумерованый список',
        },
        tables: {
          icon: 'table',
          command: null,
          title: 'Таблицы',
          children: [
            {
              name: 'table-insert',
              icon: 'table-large-plus',
              command: 'insertTable',
              title: 'Вставить таблицу',
            },
            {
              name: 'table-remove',
              icon: 'table-large-remove',
              command: 'deleteTable',
              title: 'Удалить таблицу',
            },
            {
              name: 'table-merge',
              icon: 'table-merge-cells',
              command: 'mergeCells',
              title: 'Объединить ячейки',
            },
            {
              name: 'table-split',
              icon: 'table-split-cell',
              command: 'splitCell',
              title: 'Разделить ячейку',
            },
            // Столбцы и строки - add
            {
              name: 'table-add-column-before',
              icon: 'table-column-plus-before',
              command: 'addColumnBefore',
              title: 'Вставить столбец слева',
            },
            {
              name: 'table-add-column-after',
              icon: 'table-column-plus-after',
              command: 'addColumnAfter',
              title: 'Вставить столбец справа',
            },
            {
              name: 'table-add-row-before',
              icon: 'table-row-plus-before',
              command: 'addRowBefore',
              title: 'Вставить строку сверху',
            },
            {
              name: 'table-add-row-after',
              icon: 'table-row-plus-after',
              command: 'addRowAfter',
              title: 'Вставить строку снизу',
            },
            // Столбцы и строки - delete
            {
              name: 'table-delete-column',
              icon: 'table-column-remove',
              command: 'deleteColumn',
              title: 'Удалить столбец',
            },
            {
              name: 'table-delete-row',
              icon: 'table-row-remove',
              command: 'deleteRow',
              title: 'Удалить строку',
            },
            // Заголовки
            {
              name: 'table-cell-heading',
              icon: 'page-layout-header-footer',
              command: 'toggleHeaderCell',
              title: 'Сделать ячейку заголовком',
            },
          ],
        },
      },
    };
  },

  computed: {
    toolbarSchema() {
      return this.schema || this.defaultSchema || null;
    },
  },

  methods: {
    runCommand(command) {
      // Особенные команды
      if (command === 'insertTable') {
        this.editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
      } else {
        // Все остальные
        this.editor.chain().focus()[command]().run();
      }
    },

    isDisabled(command) {
      return !this.editor.can()[command]();
    },
  },
};
</script>

<style lang="scss" scoped>
.au-editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  padding: 0 0 0 3px;

  border: 1px solid #ddd;
  border-radius: 4px;
}

.toolbar-item {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  margin: 2px 2px 2px 0;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s linear;

  &:hover {
    background-color: #3F6ADA;

    & > .au-icon {
      background-color: #fff !important;
    }
  }

  &.is-active {
    background-color: #3F6ADA;

    & > .au-icon {
      background-color: #fff !important;
    }
  }

  &[disabled] {
    background-color: #fff;
    pointer-events: none;

    & > .au-icon {
      background-color: #aaa !important;
    }
  }
}

.toolbar-children {
  position: absolute;
  z-index: 2;
  top: 31px;
  left: 0;
  display: none;
  flex-wrap: wrap;
  width: 144px;
  padding: 2px 0 2px 4px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px #ddd;
  cursor: default;
}

.toolbar-parent {
  position: relative;

  &:hover .toolbar-children {
    display: flex;
  }
}

</style>
