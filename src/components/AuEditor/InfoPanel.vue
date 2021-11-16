<template>

<node-view-wrapper
  id="editor-information-panel"
  :class="['editor-information-panel', `editor-information-panel--${infoType}`,
  {
    'editor-information-panel--focused': showPopover,
    'editor-information-panel--delete': isDelete,
  }]"
  :data-type="infoType"
  :data-id="tooltipId"
>
  <au-popover
    popover-inner-class="info-panel-popover"
    class="editor-information-panel__content"
    popover-arrow-class="none"
    trigger="manual"
    :auto-hide="false"
    :open="showId === tooltipId"
    placement="bottom"
    offset="0"
    v-clickaway="onDropdownClickaway"
  >
    <au-icon
      :icon="iconTypes[infoType].icon"
      :color="iconTypes[infoType].color"
      :size="22"
    />

    <node-view-content
      class="editor-information-panel__text"
      ref="content"
      @click.native="changeFocus(tooltipId)"
    />

    <template
      #popover
    >
      <div class="info-panel-popover">
        <div
          v-for="(item, key) in iconTypes"
          :key="`icon-${key}`"
          :class="['icon-item', { active: infoType === key }]"
          @click="passType(key)"
        >
          <span class="icon-tooltip">{{ iconTypes[key].title }}</span>
          <au-icon
            :icon="iconTypes[key].icon"
            :color="iconTypes[key].color"
            :size="22"
          />
        </div>

        <div
          class="icon-item delete separator"
          @click="deleteItem"
          @mouseenter="deleteStatus"
          @mouseleave="deleteStatus"
        >
          <span class="icon-tooltip">Удалить</span>
          <au-icon icon="mdi-trash-can" :size="18"/>
        </div>
      </div>
    </template>
  </au-popover>
</node-view-wrapper>

</template>

<script>
import uniqueId from 'lodash/uniqueId';
import { directive as clickaway } from 'vue-clickaway';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/vue-2';

export default {
  name: 'editor-information-panel',

  data: () => ({
    info: 'content',
    showPopover: null,
    isDelete: false,
    tooltipId: null,
    showId: null,
    iconTypes: {
      info: {
        icon: 'mdi-information',
        color: 'rgb(0, 82, 204)',
        title: 'Инфо',
      },
      note: {
        icon: 'mdi-text-box',
        color: 'rgb(82, 67, 170)',
        title: 'Заметка',
      },
      success: {
        icon: 'mdi-check-circle',
        color: 'rgb(0, 135, 90)',
        title: 'Успешно',
      },
      warning: {
        icon: 'mdi-alert',
        color: 'rgb(255, 153, 31)',
        title: 'Внимание',
      },
      cross: {
        icon: 'mdi-close-circle',
        color: 'rgb(222, 53, 11)',
        title: 'Ошибка',
      },
    },
  }),

  components: {
    NodeViewWrapper,
    NodeViewContent,
  },

  directives: { clickaway },

  props: {
    node: Object,
    editor: Object,
    getPos: Function,
    updateAttributes: Function,
  },

  computed: {
    infoText: {
      get() {
        return this.node.attrs.text;
      },
      set(text) {
        this.updateAttributes({
          text,
        });
      },
    },

    infoType: {
      get() {
        return this.node.attrs.type;
      },
      set(type) {
        this.updateAttributes({
          type,
        });
      },
    },
  },

  created() {
    this.tooltipId = uniqueId('tooltip');
  },

  methods: {
    onDropdownClickaway() {
      this.showPopover = false;
      this.showId = null;
      return null;
    },

    getIcon(type) {
      if (type === 'cross') {
        return 'cross';
      }
      return `editor-${type}`;
    },

    passType(type) {
      this.infoType = type;
    },

    changeFocus(id) {
      this.showPopover = true;
      this.showId = id;
    },

    disableFocus() {
      this.showPopover = false;
      this.showId = null;
    },

    deleteItem() {
      const { tr } = this.editor.view.state;
      const pos = this.getPos();
      tr.delete(pos, pos + this.node.nodeSize);
      this.editor.view.dispatch(tr);
    },

    deleteStatus() {
      this.isDelete = !this.isDelete;
    },
  },
};
</script>

<style lang="scss">
.editor-information-panel {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  margin: 5px 0;
  background: rgb(222, 235, 255);
  transition: box-shadow .2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 0px 2px rgba(136, 162, 212, 0.77);
  }

  .page__description &,
  .comment-info &,
  .table-striped__invert &,
  .incident-item__description & {
    cursor: default;
    &:hover {
      box-shadow: unset;
    }
  }

  p {
    .page__description & {
      margin-bottom: 0;
    }
  }
  p {
    .incident-item__description & {
      margin-bottom: 0;
    }
  }
}

.editor-information-panel__text {
  padding-left: 15px;
  padding-top: 3px;
  padding-bottom: 3px;

  p {
    line-height: 1;
    margin-top: 4px !important;
    margin-bottom: 4px !important;

    .comment-content & {
      margin-bottom: 0;
    }

    .editor-information-panel--focused & {
      cursor: text;
    }
  }
}

.page__description, .comment-content, .incident-item__description, .table-striped__invert {
  .editor-information-panel__text {
    padding-left: 30px;
  }
}

.editor-information-panel--focused {
  cursor: default;
  box-shadow: inset 0px 0px 0px 2px rgba(136, 162, 212, 0.77);
}

.editor-information-panel--delete {
  cursor: default;
  box-shadow: inset 0px 0px 0px 2px rgb(255, 44, 44);
}

.editor-information-panel--info {
  background: rgb(222, 235, 255);
}

.editor-information-panel--note {
  background: rgb(234, 230, 255);
}

.editor-information-panel--success {
  background: rgb(227, 252, 239);
}

.editor-information-panel--warning {
  background: rgb(255, 250, 230);
}

.editor-information-panel--cross {
  background: rgb(255, 235, 230);
}

.editor-information-panel__content {
  display: flex;
  width: 100%;
  & .trigger {
    display: flex!important;
    justify-content: center;
    align-items: center;
  }

  div {
    width: 100%;
  }
}

.info-panel-popover {
  display: flex;
  justify-content: space-between;
  padding: 4px;
  align-items: center;
  background: #ffffff;
}

.icon-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background .2s ease-in-out;

  &.separator {
    &:before {
      position: absolute;
      content: '';
      display: block;
      left: -4px;
      background: #9F9F9F;
      width: 1px;
      height: 80%;
    }
  }

  &.active {
    background: #b4dabb;

    .icon {
      fill: #ffffff;
    }
  }

  &.delete {
    margin-left: 6px;
    &:hover {
      background: rgb(255, 44, 44);
    }
  }

  &:hover {
    background: #b4dabb;

    .icon-tooltip {
      opacity: 1;
      visibility: visible;
      padding: 4px;
      border-radius: 4px;
      transform: translateX(-50%) translateY(-30px);
      background: #fff;
    }
  }

  &:last-child {
    margin-right: 0;
  }
}

.icon-tooltip {
  position: absolute;
  white-space: nowrap;
  left: 50%;
  opacity: 0;
  visibility: hidden;
}

</style>
