<template>

<div class="au-editor-link">
  <au-popover
    placement="top-start"
    trigger="manual"
    :open="isOpen"
  >
    <div
      class="toolbar-item"
      @click="checkLink"
    >
      <au-icon :icon="`mdi-${icon}`" :size="iconSize" :color="iconColor"/>
    </div>

    <template #popover>
      <div class="au-editor-link-popover">
        <au-input
          v-model="url"
          label="URL ссылки"
          placeholder="Например: http://yandex.ru"
          small
          full-width
        />

        <au-button
          label="Применить"
          small
          @click="setLink"
        />

        <au-button
          label="Очистить"
          small
          white
          bordered
          @click="unsetLink"
        />
      </div>
    </template>
  </au-popover>
</div>

</template>

<script>
export default {
  name: 'au-editor-link',

  props: {
    editor: {
      type: Object,
      default: null,
    },
    icon: {
      type: String,
      default: 'eye',
    },
    iconSize: {
      type: Number,
      default: 22,
    },
    iconColor: {
      type: String,
      default: '#000',
    },
  },

  data() {
    return {
      isOpen: false,
      url: null,
    };
  },

  computed: {
  },

  methods: {
    checkLink() {
      this.isOpen = !this.isOpen;
      this.url = this.editor.getAttributes('link')?.href || null;
    },

    setLink() {
      this.editor.chain().focus().setLink({ href: this.url }).run();
      this.isOpen = false;
    },

    unsetLink() {
      this.editor.chain().focus().unsetLink().run();
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.au-editor-link {
  font-size: inherit;
}

.au-editor-link-popover {
  display: flex;
  align-items: flex-end;
  width: 480px;
  padding: 10px 16px;

  .au-button {
    margin-left: 12px;
  }
}
</style>
