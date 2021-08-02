<template>
  <div
    :class="componentClasses"
    @click="$emit('click', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    @mousemove="$emit('mousemove', $event)"
  >
    <div :class="{ 'has-icon': !!this.icon || this.$slots.icon }" class="input-content">
      <slot name="icon"></slot>

      <au-icon
        :icon="icon"
        :size="small ? 14 : 16"
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
    </div>
    <slot name="suffix" />
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
  flex-wrap: nowrap;
  height: 40px;
  width: 120px;
  border-radius: 4px;
  border: 1px solid $gray-blue-border;
  background-color: $light-gray;
  transition: 0.3s;

  &.is-disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  &.is-inverse {
    background-color: $white;
  }

  &.is-error {
    border: 1px solid $red;
    background-color: $red-background;
  }

  & .input-content {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    width: 100%;

    &.has-icon {
      padding: 10px 12px 10px 44px;
    }

    > .au-icon {
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

  &.wrong {
    border: 1px solid $red2;
    box-shadow: 1px 0 0 2px rgba(220, 53, 69, 0.25);
  }

  &.is-focused {
    border: 1px solid $blue;
    box-shadow: unset;
  }

  &.is-full-width {
    width: 100%;
  }

  &.is-small {
    height: 32px;
    border-radius: 2px;

    .input-content {
      padding: 0 10px;

      &.has-icon {
        padding: 0 10px 0 32px;
      }

      > .au-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    input {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
