<template>

<div class="demo-slider">
  <h2 id="au-range-slider">Слайдер / диапазон</h2>
  <div class="demo-item">
    <div style="width: 320px; margin-bottom: 8px;">
      <au-range-slider
        v-model="sliderValue"
        :min="0"
        :max="10"
        label="Количество связей"
        disabled
      />
    </div>

    <div style="width: 320px; margin-bottom: 8px;">
      <au-range-slider
        v-model="sliderRange"
        :min="0"
        :max="10"
        label="Массив [min, max]"
      />
    </div>

    <div style="width: 320px; margin-bottom: 8px;">
      <au-range-slider
        v-model="sliderValue"
        :min="0"
        :max="10"
        label="inverse"
        inverse
      />
    </div>

    <div style="width: 320px; margin-bottom: 8px;">
      <au-range-slider
        v-model="sliderValue"
        :min="0"
        :max="10"
        label="tiny"
        tiny
      />
    </div>

  <pre>&lt;au-range-slider
  v-model: [Number, Array] {{ sliderValue }}
  min: Number
  max: Number
  interval: Number | 1
  label: String

  required
  disabled

  @input
/&gt;</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-popover',

  data() {
    return {
      sliderValue: 0,
      sliderRange: [0, 10],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
