<template>
  <div :class="$options.name">
    <au-input
      ref="input"
      :value="value"
      :full-width="fullWidth"
      small
      readonly
      @click="showPicker = true"
    >
      <template #icon>
        <div v-if="value" class="color-value" :style="{ backgroundColor: value }" />
      </template>
    </au-input>

    <div
      v-if="showPicker"
      ref="container"
      class="color-picker__container"
      @mouseleave="showPicker = false"
    >
      <verte
        :value="value"
        display="widget"
        model="hex"
        @input="$emit('change', $event)"
      />
    </div>
  </div>
</template>

<script>
import Verte from 'verte';

export default {
  name: 'au-color-picker',

  components: { Verte },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: String,
      default: null,
    },
    small: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    showPicker: false,
    containerPosition: { x: null, y: null },
  }),
};
</script>

<style lang="scss" scoped>
.au-color-picker {
  position: relative;
  overflow: unset;
  box-sizing: border-box;
  cursor: pointer;
}

.color-value {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid white;
  background-image: linear-gradient(0deg, rgba(255,255,255,0.00) 14%, rgba(255,255,255,0.50) 100%);
}

.color-picker__container {
  position: absolute;
  top: -6px;
  left: -6px;
  z-index: 1;
}
</style>
