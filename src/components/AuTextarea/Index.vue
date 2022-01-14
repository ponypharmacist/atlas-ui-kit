<template>
  <div
    :class="componentClasses"
    @click="$emit('click', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    @mousemove="$emit('mousemove', $event)"
  >
    <label v-if="label" :for="name">
      {{ label }}
      <asterisk v-if="required"/>
    </label>

    <div class="au-input-content">
      <textarea
        ref="textarea"
        :placeholder="placeholder"
        :name="name"
        :required="required"
        :value="value"
        :disabled="disabled || readonly"
        :rows="rows"
        autocomplete="off"
        @change="onChange"
        @input="onInput"
        @focus="onFocus"
        @focusin="isFocused = true"
        @focusout="isFocused = false"
      />
    </div>
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId';

export default {
  name: 'au-textarea',

  model: {
    prop: 'value',
    event: 'input',
  },

  inheritAttrs: false,

  props: {
    value: {
      type: [String, Number, Array],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    rows: {
      type: Number,
      default: 4,
    },
    name: {
      type: String,
      default: uniqueId(),
    },
    inputErrors: {
      type: Array,
      default: () => ([]),
    },

    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },

    small: {
      type: Boolean,
      default: false,
    },
    tiny: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isFocused: false,
    nextItemText: null,
  }),

  computed: {
    componentClasses() {
      return [
        this.$options.name,
        {
          'is-focused': this.isFocused,
          'is-small': this.small,
          'is-tiny': this.tiny,
          'is-inverse': this.inverse,
          'is-disabled': this.disabled,
          'is-error': this.hasErrors,
        },
      ];
    },

    hasErrors() {
      return this.inputErrors?.length;
    },
  },

  mounted() {
    if (this.autofocus) {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },

    onChange(event) {
      this.$emit('change', event.target.value);
    },

    onFocus(event) {
      this.$emit('focus', event.target.value);
    },

    // Multple items methods
    addNextItem() {
      if (!this.nextItemText) return;

      if (Array.isArray(this.value)) {
        const arr = [...this.value];

        arr.push(this.nextItemText);
        this.$emit('input', arr);

        this.nextItemText = null;
      }
    },

    removeChip(index) {
      if (this.disabled || this.readonly) return;

      if (Array.isArray(this.value)) {
        const arr = [...this.value];

        arr.splice(index, 1);
        this.$emit('input', arr);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-textarea {
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-size: 13px;
    line-height: 16px;
    font-family: inherit;
    font-weight: 500;
  }

  .au-input-content {
    display: flex;
    padding: 10px 12px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid $gray-blue-border;
    background-color: $light-gray;
    transition: 0.3s;
  }

  textarea {
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    background-color: transparent;
    border: none;
    resize: vertical;

    &::placeholder {
      color: #9F9F9F;
    }

    &[disabled] {
      pointer-events: none;
    }
  }

  &.is-disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  &.is-inverse {
    .au-input-content {
      background-color: white;
    }
  }

  &.is-error {
    .au-input-content {
      border: 1px solid $red;
      background-color: $red-background;
    }
  }

  &.wrong {
    .au-input-content {
      border: 1px solid $red2;
      box-shadow: 1px 0 0 2px rgba(220, 53, 69, 0.25);
    }
  }

  &.is-focused {
    .au-input-content {
      border: 1px solid $blue;
      box-shadow: unset;
    }
  }

  &.is-small {
    .au-input-content {
      padding: 0 10px;
      border-radius: 2px;
    }

    label {
      font-size: 12px;
      line-height: 14px;
    }

    textarea {
      font-size: 12px;
      font-weight: 400;
    }
  }

  &.is-tiny {
    .au-input-content {
      padding: 0 6px;
      border-radius: 2px;
    }

    label {
      display: none;
    }

    textarea {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
