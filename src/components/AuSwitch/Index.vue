<template>
  <div
    :class="classObject"
    @click="() => !disabled && (checked = !checked)"
  />
</template>

<script>
export default {
  name: 'au-switch',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        'is-disabled': this.disabled,
        'is-checked': this.checked,
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
.au-switch {
  flex: 0 0 auto;
  position: relative;
  width: 36px;
  height: 20px;
  background-color: #f0f4fb;
  border-radius: 16px;
  transition: all 0.15s linear;
  cursor: pointer;

  &:before {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 18px;
    height: 18px;
    content: '';
    border-radius: 50%;
    background-color: #fff;
    transition: left 0.15s linear;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.22), 0 0 8px rgba(0, 0, 0, 0);
  }

  // On state
  &.is-checked {
    background-color: #3f6ada;

    &:before {
      left: 17px;
    }
  }

  // Disabled
  &.is-disabled {
    background-color: #f1f1f1 !important;
    cursor: default;
  }
}
</style>
