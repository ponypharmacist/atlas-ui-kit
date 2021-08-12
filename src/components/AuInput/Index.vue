<template>
  <div
    :class="componentClasses"
    @click="$emit('click', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    @mousemove="$emit('mousemove', $event)"
  >
    <label v-if="label" :for="name">{{ label }}</label>

    <div :class="{ 'has-icon': !!this.icon || this.$slots.icon }" class="au-input-content">
      <slot name="icon"></slot>

      <au-icon
        class="au-select-icon"
        :icon="icon"
        :size="iconSize"
        :class="{ 'au-icon-error': hasErrors }"
        color="#3F6ADA"
      />

      <input
        ref="input"
        :class="[]"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :required="required"
        :value="value"
        :disabled="disabled || readonly"
        autocomplete="off"
        v-mask="mask"
        @change="onChange"
        @input="onInput"
        @focus="onFocus"
        @focusin="isFocused = true"
        @focusout="isFocused = false"
      >

      <slot name="suffix" />
    </div>

  </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask';
import uniqueId from 'lodash/uniqueId';

export default {
  name: 'au-input',

  model: {
    prop: 'value',
    event: 'input',
  },

  directives: {
    mask: VueMaskDirective,
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
    name: {
      type: String,
      default: uniqueId(),
    },
    inputErrors: {
      type: Array,
      default: () => ([]),
    },
    type: {
      type: String,
      default: 'text',
    },
    mask: {
      type: [String, Array, Function],
      default: null,
    },
    icon: {
      type: String,
      default: null,
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

    fullWidth: {
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
  }),

  computed: {
    componentClasses() {
      return [
        this.$options.name,
        {
          'is-focused': this.isFocused,
          'is-full-width': this.fullWidth,
          'is-small': this.small,
          'is-tiny': this.tiny,
          'is-inverse': this.inverse,
          'is-disabled': this.disabled,
          'is-error': this.hasErrors,
        },
      ];
    },

    iconSize() {
      if (this.tiny) return 12;
      if (this.small) return 14;

      return 16;
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
    onChange(event) {
      this.$emit('change', event.target.value);
    },
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus(event) {
      this.$emit('focus', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-input {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 120px;

  label {
    margin-bottom: 5px;
    font-size: 13px;
    line-height: 16px;
    font-family: inherit;
    font-weight: 500;
  }

  .au-input-content {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid $gray-blue-border;
    background-color: $light-gray;
    transition: 0.3s;

    &.has-icon {
      padding: 10px 12px 10px 44px;
    }

    .au-select-icon {
      position: absolute;
      left: 16px;
    }
  }

  input {
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    background-color: transparent;
    border: none;

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

  &.is-full-width {
    width: 100%;
  }

  &.is-small {
    .au-input-content {
      height: 32px;
      padding: 0 10px;
      border-radius: 2px;

      &.has-icon {
        padding: 0 10px 0 32px;
      }

      .au-select-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    label {
      font-size: 12px;
      line-height: 14px;
    }

    input {
      font-size: 12px;
      font-weight: 400;
    }
  }

  &.is-tiny {
    .au-input-content {
      height: 24px;
      padding: 0 6px;
      border-radius: 2px;

      &.has-icon {
        padding: 0 10px 0 28px;
      }

      .au-select-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    label {
      display: none;
    }

    input {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
