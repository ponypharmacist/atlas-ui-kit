<template>

<v-popover
  popover-class="au-popover"
  :open="open"
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
import Vue from 'vue';
import { VPopover, VClosePopover } from 'v-tooltip';

Vue.directive('close-popover', VClosePopover);

export default {
  name: 'au-popover',

  components: { VPopover },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
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
$arrow-small: 5px;
$arrow-big: 10px;

.tooltip {
  display: block !important;
  z-index: 10000;
  box-shadow: 0 0 29px rgba(11, 66, 136, 0.3), 0 0 9px rgba(11, 66, 136, 0.12);
  font-family: inherit;

  &:not(.au-popover) {
    font-size: 11px;
    line-height: 14px;
    font-weight: 500;
  }

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 5px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow,
  .popover-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: $arrow-small;
    border-color: black;
    z-index: 1;
  }

  .popover-arrow {
    margin: 10px;
  }

  &[x-placement^="top"] {
    margin-bottom: $arrow-small;

    .tooltip-arrow {
      border-width: $arrow-small $arrow-small 0 $arrow-small;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -$arrow-small;
      left: calc(50% - #{$arrow-small});
      margin-top: 0;
      margin-bottom: 0;
    }

    .popover-arrow {
      border-width: 10px 10px 0 10px;
      bottom: -10px;
      left: calc(50% - 10px);
    }
  }

  &[x-placement^="bottom"] {
    margin-top: $arrow-small;

    .tooltip-arrow {
      border-width: 0 $arrow-small $arrow-small $arrow-small;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -$arrow-small;
      left: calc(50% - #{$arrow-small});
      margin-top: 0;
      margin-bottom: 0;
    }

    .popover-arrow {
      border-width: 0 10px 10px 10px;
      top: -10px;
      left: calc(50% - 10px);
    }
  }

  &[x-placement^="right"] {
    margin-left: $arrow-small;

    .tooltip-arrow {
      border-width: $arrow-small $arrow-small $arrow-small 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -$arrow-small;
      top: calc(50% - #{$arrow-small});
      margin-left: 0;
      margin-right: 0;
    }

    .popover-arrow {
      border-width: 8px 8px 8px 0;
      left: -8px;
      top: calc(50% - 8px);
    }
  }

  &[x-placement^="left"] {
    margin-right: $arrow-small;

    .tooltip-arrow {
      border-width: $arrow-small 0 $arrow-small $arrow-small;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -$arrow-small;
      top: calc(50% - #{$arrow-small});
      margin-left: 0;
      margin-right: 0;
    }

    .popover-arrow {
      border-width: 8px 0 8px 8px;
      right: -8px;
      top: calc(50% - 8px);
    }
  }

  &.au-popover {
    border-radius: 5px;
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 0;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }

    &[x-placement^="top"]    { margin-bottom: 10px; }
    &[x-placement^="bottom"] { margin-top: 10px; }
    &[x-placement^="right"]  { margin-left: 8px; }
    &[x-placement^="left"]   { margin-right: 8px; }
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
