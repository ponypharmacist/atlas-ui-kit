<template>
  <div class="au-tooltip" v-tooltip="tooltipOptions">
    <slot/>
  </div>
</template>

<script>
import { VTooltip } from 'v-tooltip';

export default {
  name: 'au-tooltip',

  directives: {
    tooltip: VTooltip,
  },

  props: {
    placement: {
      type: String,
      default: 'top',
    },
    content: {
      type: String,
      default: 'Tooltip',
    },
    offset: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    tooltipOptions() {
      return {
        content: this.content,
        placement: this.placement,
        // classes: ['info'],
        // targetClasses: ['it-has-a-tooltip'],
        offset: this.offset,
        delay: {
          show: 200,
          hide: 200,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.au-tooltip {
  display: inline-block;
}
</style>
