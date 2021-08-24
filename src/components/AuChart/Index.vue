<template>

<div :id="chartId" class="au-chart">
  <div :id="`${chartId}-box`" class="chart-box">

    <template
      v-for="(point, pointIndex) in dataset"
    >
      <div
        :key="`point-${pointIndex}`"
        class="chart-point-line"
      >
        <div class="chart-point" :style="pointStyle(point)">
          <au-tooltip content="Hello, world!">
            <div class="chart-point-dot" :style="pointStyle(point)"></div>
          </au-tooltip>
        </div>
      </div>

      <svg
        v-if="curveWidth && (pointIndex + 1 < dataset.length)"
        :key="`svg-${pointIndex}`"
        class="chart-curve"
        :style="curveStyle(pointIndex)"
        :viewBox="viewBox(pointIndex)"
        preserveAspectRatio="none"
      >
        <path
          :d="bezierFormula(pointIndex)"
          stroke="dodgerblue"
          :stroke-width="settings.line.width"
          stroke-linecap="round"
          fill="transparent"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </template>

  </div>
</div>

</template>

<script>
export default {
  name: 'au-chart',

  props: {
    chartId: {
      type: [String, Number],
      default: 'auchart',
    },
    dataset: {
      type: Array,
      default: null,
    },
    options: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      settings: {
        point: {
          size: 8,
        },
        line: {
          width: this.options?.line?.width || 2,
        },
      },

      boxHeight: null,
      boxWidth: null,
      curveWidth: null,
      hello: null,
    };
  },

  created() {
  },

  mounted() {
    this.boxHeight = document.getElementById(`${this.chartId}-box`).offsetHeight;
    this.boxWidth = document.getElementById(`${this.chartId}-box`).offsetWidth;
    this.curveWidth = this.boxWidth / (this.dataset.length - 1);
  },

  computed: {
    dataMin() {
      return Math.min(...this.dataset.map((i) => i.y));
    },

    dataMax() {
      return Math.max(...this.dataset.map((i) => i.y));
    },

    dataRange() {
      return this.dataMax - this.dataMin;
    },
  },

  methods: {
    pointStyle(point) {
      const { size } = this.settings.point;
      const bottom = ((point.y - this.dataMin) * 100) / this.dataRange;

      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `-${size / 2}px`,
        bottom: `calc(${bottom}% - ${size / 2}px)`,
      };
    },

    viewBox(pointIndex) {
      const point = this.dataset[pointIndex];
      const pointNext = this.dataset[pointIndex + 1];
      const diffPercent = Math.abs(point.y - pointNext.y) / this.dataRange;
      const height = `${diffPercent * this.boxHeight + this.settings.line.width}`;

      return `0 0 ${this.curveWidth} ${height}`;
    },

    curveStyle(pointIndex) {
      const point = this.dataset[pointIndex];
      const pointNext = this.dataset[pointIndex + 1];
      const diffPercent = Math.abs(point.y - pointNext.y) / this.dataRange;
      const height = `${diffPercent * this.boxHeight + this.settings.line.width}`;
      const top = `${((this.dataMax - Math.max(point.y, pointNext.y)) / this.dataRange) * this.boxHeight}`;

      return {
        width: `${100 / (this.dataset.length - 1)}%`,
        height: `${height}px`,
        marginTop: `${top}px`,
      };
    },

    bezierFormula(pointIndex) {
      const point = this.dataset[pointIndex];
      const pointNext = this.dataset[pointIndex + 1];
      const height = `${(Math.abs(point.y - pointNext.y) / this.dataRange) * this.boxHeight}`;
      const width = this.curveWidth;
      const ascending = point.y < pointNext.y;

      const c1 = ascending ? `${width / 2},${height}` : `${width / 2},0`;
      const c2 = ascending ? `${width / 2},0` : `${width / 2},${height}`;

      if (ascending) {
        return `M0,${height} C ${c1} ${c2} ${width},0`;
      }

      return `M${width} ${height} C ${c2} ${c1} 0,0`;
    },
  },
};
</script>

<style lang="scss">
.au-chart {
  width: 100%;
  height: 200px;
}

.chart-box {
  width: 500px;

  display: flex;
  align-items: stretch;
  height: 100%;
}

.chart-point-line {
  position: relative;
  height: 100%;
  width: 0;
  // border-right: 1px dashed salmon;
}

.chart-point {
  position: absolute;
  display: flex;
}

.chart-point-dot {
  content: '';
  border-radius: 50%;
  background-color: dodgerblue;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.5);
  }
}

.chart-curve {
  overflow: visible;
}
</style>
