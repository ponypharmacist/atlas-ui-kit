<template>

<div
  class="au-alerts"
>
  <div
    v-for="(message, index) in value"
    :key="`message-${index}`"
    class="message"
    :class="message.type"
    @click="$emit('removeMessage', index)"
  >
    {{ message.text }}
  </div>
</div>

</template>

<script>
export default {
  name: 'au-alerts',

  props: {
    value: {
      type: Array,
      default: () => [],
    },
    timeout: {
      type: Number,
      default: 6000,
    },
  },

  data() {
    return {
      messageTypes: {
        info: {
          color: 'DodgerBlue',
        },
        warning: {
          color: 'Moccasin',
        },
        error: {
          color: 'LightCoral',
        },
      },
    };
  },

  watch: {
    value(arr) {
      if (arr?.length && this.timeout) {
        setTimeout(() => (this.$emit('removeMessage', 0)), this.timeout);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.au-alerts {
  position: fixed;
  width: 300px;
  height: auto;
  bottom: 10px;
  right: 16px;
  z-index: 100;
}

.message {
  width: 100%;
  padding: 16px 20px 14px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 16px;
  color: white;
  background-color: DodgerBlue;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.75;

  &:hover {
    opacity: 0.9;
  }

  &.info {
    background-color: DodgerBlue;
  }

  &.warning {
    color: black;
    background-color: Gold;
  }

  &.error {
    background-color: IndianRed;
  }
}
</style>
