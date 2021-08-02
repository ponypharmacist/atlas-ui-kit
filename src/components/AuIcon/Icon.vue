<template>
  <div
    v-if="icon"
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
    // Принудительно делаем иконку маской
    mask: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    styles() {
      let style = '';

      if (this.size) style += `width: ${this.size}px; height: ${this.size}px;`;

      if (this.color) style += `background-color: ${this.color};`;

      // Оставляем исходные цвета иконки или красим ее в один цвет
      if (!this.color && !this.mask) {
        style += `background: transparent url('${this.getIconUrl}') no-repeat 0 0 / 100% 100%;`;
      } else {
        style += `-webkit-mask: url('${this.getIconUrl}') no-repeat 0 0 / 100% 100%;`;
        style += `mask: url('${this.getIconUrl}') no-repeat 0 0 / 100% 100%;`;
      }

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

  // background-color: #fff;
  box-sizing: border-box;

  &.au-icon-white {
    background-color: $white;
  }

  &.au-icon-blue {
    background-color: $blue;
  }

  &.au-icon-error {
    background-color: $red!important;
  }
}
</style>
