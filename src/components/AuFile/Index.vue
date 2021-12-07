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
      :disabled="disabled"
      @click.prevent
    />

    <div class="placeholder">
      {{ fileName || 'Файл не выбран...' }}
      <asterisk v-if="!fileName && required"/>
    </div>

    <au-icon
      v-if="fileName"
      icon="mdi-close"
      color="#bbb"
      :size="22"
      @click.native="clearValue"
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
    value: {
      default: null,
    },
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
    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      reload: false,
      files: null,
    };
  },

  watch: {
    value(newVal) {
      if (!newVal) {
        this.files = null;
      }
    },
  },

  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        disabled: this.disabled,
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
      } else {
        this.$emit('input', null);
      }
    },

    clearValue() {
      this.files = null;
      this.$emit('input', null);
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

  .placeholder {
    padding-left: 16px;
    padding-right: 12px;
  }

  &.disabled {
    pointer-events: none;

    .placeholder {
      color: #aaa;
    }
  }
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

.au-icon {
  margin-left: auto;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: $red !important;
  }
}
</style>
