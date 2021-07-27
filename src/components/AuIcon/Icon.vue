<template>
  <div
    :class="`au-icon icon-${icon}`"
    :title="title"
    :style="styles"
  >
  </div>
</template>

<script>
export default {
  name: 'icon',

  inheritAttrs: false,

  props: {
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    size: {
      type: Number,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },

  computed: {
    styles() {
      return `width: ${this.size}px; height: ${this.size}px;`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./icons.scss";

$default-size: 12px;

.au-icon {
  display: inline-block;

  width: $default-size;
  height: $default-size;
  min-width: $default-size;

  background-color: #000;
  box-sizing: border-box;
}
</style>
