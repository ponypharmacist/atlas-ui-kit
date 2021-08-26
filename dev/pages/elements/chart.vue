<template>

<div class="demo-chart">
  <h2 id="au-chart">График (сильно сырой, не использовать)</h2>
  <div class="demo-item">
    <au-chart
      :dataset="dataset"
      :options="options"
    />
  </div>

  <div style="margin: 16px 0 0; display: flex;">
    <au-input
      v-model="options.point.size"
      label="options.point.size"
      small
      class="chart-input"
    />
    <au-input
      v-model="options.point.backgroundColor"
      label="options.point.backgroundColor"
      small
      class="chart-input"
    />
    <au-input
      v-model="options.point.borderColor"
      label="options.point.borderColor"
      small
      class="chart-input"
    />
    <au-input
      v-model="options.point.borderWidth"
      label="options.point.borderWidth"
      small
      class="chart-input"
    />
    <au-input
      v-model="options.point.borderStyle"
      label="options.point.borderStyle"
      small
      class="chart-input"
    />
  </div>

  <div style="margin: 16px 0 0; display: flex;">
    <au-input
      v-model="options.line.width"
      label="options.line.width"
      small
      class="chart-input"
    />

    <au-input
      v-model="options.line.color"
      label="options.line.color"
      small
      class="chart-input"
    />

    <au-input
      v-model="options.line.tension"
      label="options.line.tension"
      small
      class="chart-input"
    />
  </div>

  <div style="display: flex; flex-direction: column; align-items: flex-start;">
  <pre style="margin-top: 16px;">&lt;au-chart
  chart-id: String, Number
  dataset: Array | [{ x: 1, y: 1 }]
  options: Object
&lt;/&gt;

#point - slot для точек на графике
#pointline - slot для линий, проходящих сквозь точки</pre>

  <pre style="margin-top: 16px;">options: {
  point: {
    size: 8,
    backgroundColor: 'dodgerblue',
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
  },

  line: {
    width: 2,
    color: 'dodgerblue',
    tension: 1, | 0 to 1, но после 2 выглядит странно
  },
},</pre>
  </div>

</div>

</template>

<script>
export default {
  name: 'demo-chart',

  data() {
    return {
      dataset: [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 13 },
        { x: 5, y: 13 },
        { x: 6, y: 13 },
        { x: 7, y: 18 },
        { x: 8, y: 21 },
        { x: 9, y: 30 },
        { x: 10, y: 16 },
        { x: 11, y: 10 },
        { x: 12, y: 11 },
        { x: 13, y: 12 },
        { x: 14, y: 13 },
        { x: 15, y: 14 },
      ],

      options: {
        point: {
          size: 8,
          backgroundColor: 'dodgerblue',
          borderColor: 'white',
          borderWidth: 1,
          borderStyle: 'solid',
        },
        line: {
          width: 2,
          color: 'dodgerblue',
          tension: 0.5,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.chart-input {
  margin-right: 16px;
  width: 184px;
}
</style>
