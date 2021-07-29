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
      required: true,
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
      let style = '';

      if (this.size) style += `width: ${this.size}px; height: ${this.size}px;`;

      if (this.color) style += `background-color: ${this.color};`;

      style += `-webkit-mask: url('${this.getIconUrl}') no-repeat 0 0 / 100% 100%;`;
      style += `mask: url('${this.getIconUrl}') no-repeat 0 0 / 100% 100%;`;

      return style;
    },

    getIconUrl() {
      if (this.icon.includes('mdi-')) {
        const images = require.context('@mdi/svg/svg/', false, /\.svg$/);

        return images(`./${this.icon.slice(4)}.svg`);
      }

      const images = require.context('@/assets/icons/', false, /\.svg$/);

      return images(`./${this.icon}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

$default-size: 12px;

.au-icon {
  display: inline-block;

  width: $default-size;
  height: $default-size;
  min-width: $default-size;

  background-color: #000;
  box-sizing: border-box;

  &.au-icon-error {
    background-color: $red!important;
  }
}
</style>
