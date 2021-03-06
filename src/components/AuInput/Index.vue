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
        v-if="!multiple"
        ref="input"
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
      />

      <div v-else class="multiple-values">
        <div
          v-for="(item, index) in value"
          :key="`chip-${index}-${item}`"
          class="input-chip"
          @click="removeChip(index)"
        >
          {{ item }}
        </div>

        <input
          ref="input"
          type="text"
          placeholder="Добавляйте значения по очереди"
          :name="name"
          :required="required"
          v-model="nextItemText"
          :disabled="disabled || readonly"
          autocomplete="off"
          v-mask="mask"
          @focusin="isFocused = true"
          @focusout="isFocused = false"
        />
      </div>

      <au-icon
        v-if="multiple"
        class="au-input-clear"
        icon="mdi-plus-circle"
        :size="iconSize + 4"
        color="dodgerblue"
        @click.native.stop="addNextItem"
      />

      <au-icon
        v-if="clearable && value"
        class="au-input-clear"
        icon="mdi-close"
        :size="iconSize"
        color="#bbb"
        @click.native.stop="$emit('input', null)"
      />

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
    clearable: {
      type: Boolean,
      default: false,
    },
    multiple: {
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
    emitEvent: {
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
          'is-full-width': this.fullWidth,
          'is-small': this.small,
          'is-tiny': this.tiny,
          'is-inverse': this.inverse,
          'is-disabled': this.disabled,
          'is-error': this.hasErrors,
          'is-multiple': this.multiple,
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
    onInput(event) {
      if (this.emitEvent) this.$emit('input', event);
      else this.$emit('input', event.target.value);
    },

    onChange(event) {
      if (this.emitEvent) this.$emit('change', event);
      else this.$emit('change', event.target.value);
    },

    onFocus(event) {
      if (this.emitEvent) this.$emit('focus', event);
      else this.$emit('focus', event.target.value);
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

  .au-input-clear {
    position: absolute;
    right: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}

// Multiple values + chips
.is-multiple {
  .multiple-values {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    input {
      width: 100%;
      height: 26px;
    }

    .input-chip {
      margin-right: 4px;
      padding: 4px 6px;
      border-radius: 12px;
      background-color: #f1f1f1;
      border: thin solid #ddd;
      cursor: pointer;
    }
  }

  .au-input-content {
    padding: 5px 28px 5px 12px;
    height: auto;
  }

  &.is-small {
    .input-chip {
      padding: 2px 4px;
      font-size: 12px;
    }
  }

  &.is-tiny {
    .input-chip {
      padding: 2px 4px;
      font-size: 12px;
    }
  }

  &.is-disabled {
    .input-chip {
      color: #999;
      cursor: not-allowed;
    }

    .au-input-clear {
      cursor: not-allowed;
    }
  }
}
</style>
