<template>

<v-popover
  popover-class="au-popover"
  :placement="placement"
  :trigger="trigger"
  :disabled="disabled"
>
  <slot/>

  <template #popover>
    <slot name="popover"/>
  </template>
</v-popover>

</template>

<script>
import { VPopover } from 'v-tooltip';

export default {
  name: 'au-popover',

  components: { VPopover },

  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    trigger: {
      type: String,
      default: 'hover',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.au-popover {
  display: block !important;
  z-index: 10000;
  box-shadow: 0 0 29px rgba(11, 66, 136, 0.3), 0 0 9px rgba(11, 66, 136, 0.12);

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 12px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 12px;

    .tooltip-arrow {
      border-width: 12px 12px 0 12px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -12px;
      left: calc(50% - 12px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 12px;

    .tooltip-arrow {
      border-width: 0 12px 12px 12px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -12px;
      left: calc(50% - 12px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 8px;

    .tooltip-arrow {
      border-width: 8px 8px 8px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -8px;
      top: calc(50% - 8px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 8px;

    .tooltip-arrow {
      border-width: 8px 0 8px 8px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -8px;
      top: calc(50% - 8px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 0;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
