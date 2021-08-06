<template>
  <div>
    <v-popover
      :class="$options.name"
      trigger="hover"
      :placement="placement"
      :disabled="disabled"
    >
      <au-icon
        icon="mdi-eye"
        class="block-rights-tip icon"
        :size="24"
      />

      <div
        slot="popover"
        class="block-rights-tip__popover"
      >
        <span>Недоступные действия</span>
      </div>
    </v-popover>
  </div>
</template>

<script>
import { VPopover } from 'v-tooltip';

export default {
  name: 'info-popover',

  components: { VPopover },

  data: () => ({
    showInnerPopover: null,
  }),

  props: {
    blockedTransitions: {
      type: Array,
      default: () => [],
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    showPopover(key) {
      this.showInnerPopover = key;
    },
    closePopover(key) {
      this.showInnerPopover = key;
    },
  },
};
</script>

<style lang="scss">
.block-rights-tip__popover {
  padding-top: 7px;
  font-size: 14px;

  span {
    display: block;
    text-align: center;
    padding: 0 15px 7px 15px;
    border-bottom: 1px solid #E0E8F0;
  }
}

.info-popover {
  > .trigger {
    display: flex!important;
  }
}
</style>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.block-rights-tip {
  fill: $blue;
  margin-left: 5px;
  cursor: pointer;
  transition: filter .2s ease-in-out, transform .1s ease-in-out;

  &:hover {
    filter: opacity(1.2);
    transform: scale(1.2);
  }
}

.block-rights-lock {
  fill: $close-color;
  margin-left: 10px;
  transition: fill .2s ease-in-out;
}

.block-rights-tip__item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: $gray;
  padding: 7px 15px;
  border-bottom: 1px solid $gray-blue-border;

  &:hover {
    background: $light-gray;
    cursor: default;

    .block-rights-lock {
      fill: $blue2;
    }
  }

  &:last-child {
    border-bottom: unset;
  }
}

.block-rights-tip__item__message {
  position: absolute;
  left: -320px;
  max-width: 300px;
  border-radius: 4px;
  padding: 10px;
  background: $darkblue;
  opacity: 0;
  visibility: hidden;
  transition: all .2s ease-in-out;

  &:before {
    display: block;
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent $darkblue;
  }

  p {
    color: $light-gray;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
