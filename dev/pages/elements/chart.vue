<template>

<div class="demo-chart">
  <h2 id="au-chart">График (сильно сырой, не использовать)</h2>
  <div class="demo-item">
    <au-chart
      :dataset="dataset"
      :options="{ line: { width: 4 } }"
    />
  </div>

  <pre style="margin-top: 16px;">&lt;au-chart
  chart-id: String, Number
  dataset: Array | [{ x: 1, y: 1 }]
  options: Object
&lt;/&gt;</pre>
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
      ],
    };
  },
};
</script>
