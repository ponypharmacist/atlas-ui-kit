<template>
  <div
    v-if="icon"
    :class="classList"
    :title="title"
    :style="styles"
  >
  </div>
</template>

<script>
export default {
  name: 'au-icon',

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
    classList() {
      return [
        this.$options.name,
        {
          [`icon-${this.icon}`]: !this.icon.includes('fa-'),
          fa: this.icon.includes('fa-'),
          'fa-fw': this.icon.includes('fa-'),
          [this.icon]: this.icon.includes('fa-'),
        },
      ];
    },

    styles() {
      const iconUrl = this.getIconUrl;
      const isFa = this.icon.includes('fa-'); // is Font Awesome
      const isOriginal = iconUrl && !this.color && !this.mask && !isFa;
      const mask = (!isOriginal && iconUrl) ? `no-repeat center/contain url('${iconUrl}')` : null;

      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        color: isFa ? this.color : '#000',
        fontSize: isFa ? `${this.size}px` : null,
        '-webkit-mask': mask,
        mask,
        background: isOriginal ? `no-repeat center/contain transparent url('${iconUrl}') ` : null,
        backgroundColor: (this.color || this.mask) && !isFa ? this.color : null,
      };
    },

    getIconUrl() {
      if (this.icon.includes('fa-')) return null;

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
  flex: 0 0 auto;

  width: $default-size;
  height: $default-size;

  // background-color: #fff;
  box-sizing: border-box;
  transition: background-color 0.15s linear;

  &.au-icon-white {
    background-color: white;
  }

  &.au-icon-blue {
    background-color: $blue;
  }

  &.au-icon-error {
    background-color: $red!important;
  }
}
</style>
