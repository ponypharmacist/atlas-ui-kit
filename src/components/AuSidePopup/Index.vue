<template>

<div
  class="au-side-popup"
  :class="{ open }"
  data-width="600"
  ref="popup"
>
  <div
    class="resizer"
    @mousedown.prevent="onResize"
  />

  <div class="au-side-popup__content">
    <div
      v-if="!isLoading"
      class="close"
      @click="onClose"
    >
      <au-icon :size="18" icon="icon-close" />
    </div>

    <slot/>
  </div>
</div>

</template>

<script>
export default {
  name: 'au-side-popup',

  props: {
    open: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClose() {
      this.$emit('close');
    },

    onResize(event) {
      const popupElement = this.$refs.popup;
      const popupElementStyle = getComputedStyle(popupElement);
      const currentX = event.pageX;
      const currentPopupWidth = parseInt(popupElementStyle.width, 10);
      const popupDefaultWidth = parseInt(popupElement.dataset.width, 10);

      // get content element
      // const contentElement = document.getElementById('content');
      // if (!contentElement) return;

      const resize = (e) => {
        const newWidth = currentX - e.pageX + currentPopupWidth;
        if (newWidth < popupDefaultWidth) return;

        popupElement.style.width = `${newWidth}px`;
        // contentElement.style.paddingRight = `${newWidth}px`;
      };

      const stopResize = () => {
        window.removeEventListener('mousemove', resize);
      };

      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.au-side-popup {
  position: fixed;
  background-color: $white;
  top: 0;
  right: 0;
  width: 600px;
  box-shadow: -2px 0 14px rgba(218, 229, 247, 0.33);
  z-index: 50;
  transform: translateX(100%);
  transition: transform 0.5s;
  border-left: 1px solid $gray-blue-border;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 50%;
    margin-top: -10px;
    height: 20px;
    border-left: 1px solid $gray-blue-border;
  }

  &::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 50%;
    margin-top: -9px;
    height: 18px;
    width: 5px;
    border-right: 1px solid $gray-blue-border;
  }

  &.no-resizer {
    &::before, &::after {
      display: none;
    }
  }

  &.open {
    transform: translateX(0);
    transition: transform 0.5s;
  }

  &.close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: $close-color;
    transition: 0.3s;

    &:hover {
      color: $blue;
    }
  }
}

.au-side-popup__content {
  position: relative;
  height: 100vh;
  padding: ($mm-value * 15) + px ($mm-value * 8) + px ($mm-value * 15) + px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 4px;
    width: 4px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px #f7f7f7;
    box-shadow: inset 0 0 4px #f7f7f7;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $gray-blue-border;
    border-radius: 2px;
    outline: none;
    background-clip: border-box;
    cursor: pointer;
  }
}

.resizer {
  transition: border .05s;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 9px;
  height: 100%;
  cursor: col-resize;

  &:hover {
    border-left: 1px solid $blue !important;
  }
}
</style>
