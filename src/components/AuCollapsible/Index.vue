<template>

<div
  class="au-collapsible"
  :class="{ open: isOpen, 'is-card': isCard }"
>
  <div
    class="au-collapsible-header"
    @click="isOpen = !isOpen"
  >
    <slot name="header"/>

    <div class="au-collapsible-close">
      <au-icon
        v-if="!hideArrow && !isSwitch"
        :class="{ isOpen, hoverable: true }"
        icon="mdi-chevron-down"
        :size="20"
        color="#c6d5ee"
      />

      <au-switch
        v-if="isSwitch"
        :value="isOpen"
      />

      <template v-if="!hideText && !isSwitch">
        {{ isOpen ? text[1] : text[0] }}
      </template>
    </div>
  </div>

  <div
    v-if="isOpen"
    class="au-collapsible-body"
  >
    <slot />
  </div>

  <div
    v-if="isCard && isOpen && !hideFooter"
    class="au-collapsible-footer"
  >
    <slot name="footer" />
  </div>
</div>

</template>

<script>
export default {
  name: 'au-collapsible',

  props: {
    open: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Array,
      default: () => ['Развернуть', 'Свернуть'],
    },
    hideText: {
      type: Boolean,
      default: false,
    },
    hideArrow: {
      type: Boolean,
      default: false,
    },
    hideFooter: {
      type: Boolean,
      default: false,
    },
    isCard: {
      type: Boolean,
      default: false,
    },
    isSwitch: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isOpen: false,
  }),

  created() {
    this.isOpen = this.open;
  },

  computed: {
  },
};
</script>

<style lang="scss" scoped>
.au-collapsible {
  .au-collapsible-header {
    display: flex;
    align-items: center;
    cursor: pointer;

    .au-collapsible-close {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      flex: 0 0 auto;
      margin-left: auto;
      line-height: 16px;
      transition: color 0.2s linear;
      color: #c6d5ee;
      font-size: 12px;
      font-weight: 500;
      user-select: none;

      .au-icon {
        transition: all 0.25s ease;

        &.open {
          transform: rotate(180deg);
        }
      }
    }
  }

  .au-collapsible-body {
    margin-top: 8px;
  }

  .au-collapsible-footer {
    padding: 16px;
    border-top: 1px solid #E0E8F0;
  }

  &.is-card {
    border: 1px solid #E0E8F0;
    border-radius: 5px;

    .au-collapsible-header {
      padding: 16px 16px 14px;
    }

    .au-collapsible-body {
      margin: 0;
      padding: 16px;
      border-top: 1px solid #E0E8F0;
    }
  }
}
</style>
