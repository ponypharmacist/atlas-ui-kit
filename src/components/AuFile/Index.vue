<template>
  <div :class="classObject">
    <slot/>

    <input
      v-if="!reload"
      ref="input"
      class="file-input"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @change="inputOnChange"
    />

    <au-button
      :label="label"
      @click.prevent
    />

    <div class="placeholder">
      {{ fileName || 'Файл не выбран...' }}
    </div>

    <au-icon
      v-if="fileName"
      icon="mdi-close"
      color="#bbb"
      :size="22"
      @click.native="files = null"
    />
    <!-- <div class="file-name">{{ fileName || 'no filename' }}</div> -->
    <!-- <pre>{{ files[0].name || 'no files list' }}</pre> -->
  </div>
</template>

<script>
export default {
  name: 'au-file',

  props: {
    // Content
    // value: {
    //   type: String,
    //   default: null,
    // },
    label: {
      type: String,
      default: 'Выберите файл',
    },

    // Options
    accept: {
      type: String,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },

    // Styling
  },

  data() {
    return {
      reload: false,
      files: null,
    };
  },

  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        // disabled: this.disabled,
      };
    },

    fileName() {
      if (this.files) return this.files[0]?.name || '???.???';
      return null;
    },
  },

  methods: {
    inputOnChange({ target }) {
      if (target.files.length) {
        this.files = target.files;

        if (!this.multiple) this.$emit('input', this.files[0]);
        else console.log('No multiple files option implemented... ');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-file {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  min-width: 360px;
  padding: 12px 12px 12px 12px;
  border-radius: 4px;
  border: 1px dashed #dee3ec;
  background-color: #fafafa;
}

.file-input {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: hotpink;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;
}

.placeholder {
  padding-left: 16px;
}

.au-icon {
  margin-left: auto;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: $red !important;
  }
}
</style>
