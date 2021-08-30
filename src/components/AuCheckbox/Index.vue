<template>

<div
  :class="classObject"
  @click="() => !disabled && (checked = !checked)"
>
  <div
    class="checkbox"
    :class="{ 'checked': checked }"
    :style="checkboxStyle"
  />

  <label v-if="label">{{ label }}</label>
</div>

</template>

<script>
export default {
  name: 'au-checkbox',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    partial: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    labelLeft: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#3F6ADA',
    },
  },

  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        partial: this.partial,
        disabled: this.disabled,
        'label-left': this.labelLeft,
        'full-width': this.fullWidth,
        rounded: this.rounded,
      };
    },

    checkboxStyle() {
      if (this.checked) {
        return {
          backgroundColor: this.color,
          borderColor: this.color,
          borderRadius: this.rounded ? '50%' : '2px',
        };
      }

      return {
        borderRadius: this.rounded ? '50%' : '2px',
      };
    },

    checked: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.au-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 16px;
  min-width: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  user-select: none;

  label {
    line-height: 16px;
    margin-left: 6px;
    cursor: pointer;
    transition: color 0.2s linear;
  }

  .checkbox {
    width: 14px;
    height: 14px;
    outline: none;
    background-color: #ebf2f7;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    border: 1px solid #d4dce6;
    border-radius: 2px;
    box-sizing: border-box;
    transition: border-color 0.2s linear;

    &::before {
      position: absolute;
      content: '';
      height: 12px;
      width: 12px;
    }

    &.checked {
      // background-color: $blue;
      // border-color: $blue;
      background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.12) 100%);

      &::before {
        -webkit-mask: $icon-check;
        mask: $icon-check;
        background-color: #fff;
      }
    }
  }

  &:hover .checkbox {
    border-color: $blue;
  }

  &.label-left {
    label {
      order: 1;
      margin: 0 6px 0 0;
    }
    .checkbox { order: 2; }
  }

  &.full-width {
    width: 100%;

    label {
      margin-left: auto;
    }

    &.label-left {
      label {
        margin: 0 auto 0 0;
      }
    }
  }

  &.partial {
    .checkbox {
      border-color: #d4dce6;
      background-color: #ebf2f7;
      background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);

      &:before {
        -webkit-mask: $icon-check;
        mask: $icon-check;
        background-color: #bdc6d6;
      }

      &:hover {
        border-color: $blue;
      }
    }
  }

  &.disabled {
    color: #999;
    cursor: default;
    cursor: default;

    .checkbox {
      background-image: none;
      border-color: #d4dce6;

      &.checked {
        background-color: #B1BBCB;
      }
    }

    label {
      cursor: default;
    }

    &:hover .checkbox::before {
      border-color: #ccc;
    }
  }
}
</style>
