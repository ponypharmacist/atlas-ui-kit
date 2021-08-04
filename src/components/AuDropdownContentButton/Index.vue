<template>
  <v-popover
    :open="isOpened"
    popover-class="dropdown-content-button__popover"
    popover-arrow-class="none"
    trigger="manual"
    placement="bottom-start"
    @hide="isOpened = false"
  >
    <au-button
      :label="label"
      :large="large"
      :icon="icon"
      @click="isOpened = true"
    />

    <template #popover>
      <slot
        :hide="hideContent"
      />
    </template>
  </v-popover>
</template>

<script>
import { VPopover } from 'v-tooltip';

export default {
  name: 'au-dropdown-content-button',

  components: {
    VPopover,
  },

  props: {
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isOpened: false,
  }),

  methods: {
    hideContent() {
      this.isOpened = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.dropdown-content-button {
  &__container {
    width: 240px;
  }
}
</style>

<style lang="scss">
.dropdown-content-button__popover {
  min-width: 240px;
  max-width: 240px;
  margin-left: 130px;
  box-shadow: 0 11px 29px rgba(11, 66, 136, 0.2), 0 -1px 9px rgba(11, 66, 136, 0.07);
  background-color: #fff;
  border-radius: 6px;
}
</style>
