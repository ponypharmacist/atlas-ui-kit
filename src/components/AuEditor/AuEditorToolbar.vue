<template>

<div v-if="editor" class="au-editor-toolbar">
  <template
    v-for="(item, key) in toolbarSchema"
  >
    <!-- Кастомные компоненты -->
    <component
      v-if="item.component"
      :key="key"
      :is="item.component"
      :editor="editor"
      :icon="item.icon"
      :icon-size="iconSize"
      :icon-color="iconColor"
    />

    <!-- Группы кнопок -->
    <div
      v-else-if="item.children"
      :key="key"
      class="toolbar-item toolbar-parent"
      :class="`group-${key}`"
    >
      <au-icon :icon="item.icon" :size="iconSize" :color="iconColor"/>

      <au-icon icon="mdi-chevron-down" :size="12" :color="iconColor"/>

      <div class="toolbar-children">
        <div
          v-for="subitem in item.children"
          :key="subitem.icon"
          class="toolbar-item"
          :class="{
            'is-active': subitem.isCustom ? false : editor.isActive(subitem.name, subitem.arg),
            'is-text': !subitem.icon,
          }"
          :title="subitem.title || ''"
          :disabled="isDisabled(subitem.command, subitem.arg, subitem.isCustom)"
          @click="runCommand(subitem.command, subitem.arg)"
        >
          <au-icon v-if="subitem.icon" :icon="subitem.icon" :size="iconSize" :color="iconColor"/>

          <div v-else class="toolbar-item-title">{{ subitem.title }}</div>
        </div>
      </div>
    </div>

    <!-- Единичные кнопки -->
    <div
      v-else
      :key="item.icon"
      :class="['toolbar-item', { 'is-active': editor.isActive(key, item.arg) }, item.icon]"
      :title="item.title || ''"
      @click="runCommand(item.command, item.arg)"
    >
      <au-icon :icon="item.icon" :size="iconSize" :color="iconColor"/>
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
    extendSchema: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      iconSize: 22,
      iconColor: '#000',
    };
  },

  computed: {
    toolbarSchema() {
      return this.schema || this.defaultSchema || null;
    },

    defaultSchema() {
      return {
        pilcrow: {
          icon: 'mdi-format-pilcrow',
          command: null,
          title: 'Заголовки',
          children: [
            {
              name: 'paragraph',
              command: 'setParagraph',
              title: 'Параграф',
            },
            {
              name: 'heading',
              command: 'toggleHeading',
              arg: { level: 1 },
              title: 'Заголовок 1 уровня',
            },
            {
              name: 'heading',
              command: 'toggleHeading',
              arg: { level: 2 },
              title: 'Заголовок 2 уровня',
            },
            {
              name: 'heading',
              command: 'toggleHeading',
              arg: { level: 3 },
              title: 'Заголовок 3 уровня',
            },
            {
              name: 'heading',
              command: 'toggleHeading',
              arg: { level: 4 },
              title: 'Заголовок 4 уровня',
            },
          ],
        },
        bold: {
          icon: 'mdi-format-bold',
          command: 'toggleBold',
          title: 'Полужирный',
        },
        italic: {
          icon: 'mdi-format-italic',
          command: 'toggleItalic',
          title: 'Курсивный',
        },
        strike: {
          icon: 'mdi-format-strikethrough',
          command: 'toggleStrike',
          title: 'Зачеркнутый',
        },
        underline: {
          icon: 'mdi-format-underline',
          command: 'toggleUnderline',
          title: 'Подчеркнутый',
        },
        subscript: {
          icon: 'mdi-format-subscript',
          command: 'toggleSubscript',
          title: 'Подстрочный',
        },
        superscript: {
          icon: 'mdi-format-superscript',
          command: 'toggleSuperscript',
          title: 'Надстрочный',
        },
        highlight: {
          icon: 'mdi-format-color-highlight',
          command: 'toggleHighlight',
          title: 'Выделение',
          arg: { },
        },
        clearNodes: {
          icon: 'mdi-format-clear',
          command: 'unsetAllMarks',
          title: 'Очистить форматирование',
        },
        blockquote: {
          icon: 'mdi-format-quote-close',
          command: 'toggleBlockquote',
          title: 'Цитата',
        },
        bulletList: {
          icon: 'mdi-format-list-bulleted',
          command: 'toggleBulletList',
          title: 'Маркированый список',
        },
        orderedList: {
          icon: 'mdi-format-list-numbered',
          command: 'toggleOrderedList',
          title: 'Нумерованый список',
        },
        linkCustom: {
          icon: 'mdi-link',
          component: 'au-editor-link',
          title: 'Ссылка',
        },
        tables: {
          icon: 'mdi-table',
          command: null,
          title: 'Таблицы',
          children: [
            {
              name: 'table-insert',
              icon: 'mdi-table-large-plus',
              command: 'insertTable',
              arg: { rows: 3, cols: 3, withHeaderRow: true },
              title: 'Вставить таблицу',
            },
            {
              name: 'table-remove',
              icon: 'mdi-table-large-remove',
              command: 'deleteTable',
              title: 'Удалить таблицу',
            },
            {
              name: 'table-merge',
              icon: 'mdi-table-merge-cells',
              command: 'mergeCells',
              title: 'Объединить ячейки',
            },
            {
              name: 'table-split',
              icon: 'mdi-table-split-cell',
              command: 'splitCell',
              title: 'Разделить ячейку',
            },
            // Столбцы и строки - add
            {
              name: 'table-add-column-before',
              icon: 'mdi-table-column-plus-before',
              command: 'addColumnBefore',
              title: 'Вставить столбец слева',
            },
            {
              name: 'table-add-column-after',
              icon: 'mdi-table-column-plus-after',
              command: 'addColumnAfter',
              title: 'Вставить столбец справа',
            },
            {
              name: 'table-add-row-before',
              icon: 'mdi-table-row-plus-before',
              command: 'addRowBefore',
              title: 'Вставить строку сверху',
            },
            {
              name: 'table-add-row-after',
              icon: 'mdi-table-row-plus-after',
              command: 'addRowAfter',
              title: 'Вставить строку снизу',
            },
            // Столбцы и строки - delete
            {
              name: 'table-delete-column',
              icon: 'mdi-table-column-remove',
              command: 'deleteColumn',
              title: 'Удалить столбец',
            },
            {
              name: 'table-delete-row',
              icon: 'mdi-table-row-remove',
              command: 'deleteRow',
              title: 'Удалить строку',
            },
            // Заголовки
            {
              name: 'table-cell-heading',
              icon: 'mdi-page-layout-header-footer',
              command: 'toggleHeaderCell',
              title: 'Сделать ячейку заголовком',
            },
          ],
        },

        customBlocks: {
          icon: 'mdi-plus-thick',
          command: null,
          title: 'Дополнительно',
          children: [
            {
              name: 'info_panel',
              command: 'toggleInfoPanel',
              title: 'Выноска',
              isCustom: true,
            },
            {
              name: 'info_status',
              command: 'toggleInfoStatus',
              title: 'Статус',
              isCustom: true,
            },
          ],
        },

        // Дополнительные элементы из пропса
        ...this.extendSchema,

        // Иконки справа
        undo: {
          icon: 'mdi-undo',
          command: 'undo',
        },
        redo: {
          icon: 'mdi-redo',
          command: 'redo',
        },
      };
    },
  },

  methods: {
    runCommand(command, arg = null) {
      this.editor.chain().focus()[command](arg).run();
    },

    isDisabled(command, arg = null, isCustom) {
      if (isCustom) return false;
      if (!command) return false;

      return !this.editor.can()[command](arg);
    },
  },
};
</script>

<style lang="scss">
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

    &.is-text {
      color: #fff;
    }
  }

  &.is-text {
    width: auto;
    display: block;

    &:hover {
      color: #fff;
    }

    &[disabled] {
      color: #999;
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

.toolbar-item-title {
  text-align: left;
}
</style>

<style lang="scss" scoped>
.au-editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  padding: 0 0 0 3px;
  background-color: #fff;

  border: 1px solid #ddd;
  border-radius: 4px;
}

.au-editor .au-editor-toolbar {
  border-width: 0 0 1px 0;
  border-radius: 4px 4px 0 0;
}

.toolbar-item.undo {
  margin-left: auto;
}

.toolbar-parent {
  position: relative;
  width: 42px;
  padding: 8px 6px 8px 8px;

  &:hover .toolbar-children {
    display: block;
  }
}

.toolbar-children {
  position: absolute;
  z-index: 2;
  top: 31px;
  left: 0;
  display: none;
  flex-wrap: wrap;
  padding: 2px 0 2px 4px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px #ddd;
  cursor: default;
}

.group-tables .toolbar-children {
  width: 144px;
}

.group-pilcrow .toolbar-children {
  width: 178px;
}

.group-tables:hover .toolbar-children {
  display: flex;
}

</style>
