<template>

<div :id="chartId" class="au-chart">
  <div :id="`${chartId}-box`" class="chart-box">

    <template
      v-for="(point, pointIndex) in dataset"
    >
      <div
        :key="`point-${pointIndex}`"
        class="chart-point-wrap"
      >
        <div class="chart-point" :style="pointStyle(point)">
          <slot name="point" :point="point">
            <au-tooltip :content="`${point.y} ${settings.tooltip.text}`">
              <div
                class="chart-point-dot"
                :style="{ ...pointStyle(point), ...dotStyle }"
              />
            </au-tooltip>
          </slot>
        </div>

        <slot name="pointline" :point="point">
          <div class="chart-point-line"/>
        </slot>
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
          :stroke="settings.line.color"
          :stroke-width="settings.line.width"
          stroke-linecap="round"
          fill="transparent"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </template>

  </div>

  <div class="x-axis">
    <span
      v-for="(point, pointIndex) in dataset"
      :key="`x-label-${pointIndex}`"
      :style="xLabelStyle"
      class="label"
    >
      {{ point.x }} день
    </span>
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
    settings() {
      const point = this.options?.point;
      const line = this.options?.line;
      const tooltip = this.options?.tooltip;

      return {
        point: {
          size: point?.size || 8,
          backgroundColor: point?.backgroundColor || 'dodgerblue',
          borderColor: point?.borderColor || 'white',
          borderWidth: point?.borderWidth || 1,
          borderStyle: point?.borderStyle || 'solid',
        },
        line: {
          width: line?.width || 2,
          color: line?.color || 'dodgerblue',
          tension: line?.tension || 1,
        },
        tooltip: {
          text: tooltip?.text || 'штук',
        },
      };
    },

    dataMin() {
      return Math.min(...this.dataset.map((i) => i.y));
    },

    dataMax() {
      return Math.max(...this.dataset.map((i) => i.y));
    },

    dataRange() {
      return this.dataMax - this.dataMin;
    },

    dotStyle() {
      const p = this.settings.point;

      return {
        backgroundColor: p.backgroundColor,
        border: `${p.borderWidth}px ${p.borderStyle} ${p.borderColor}`,
      };
    },

    xLabelStyle() {
      return {
        width: 0,
      };
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
      const tenseWidth = width * 0.5 * this.settings.line.tension;

      const c1 = ascending ? `${tenseWidth},${height}` : `${tenseWidth},0`;
      const c2 = ascending ? `${width - tenseWidth},0` : `${width - tenseWidth},${height}`;

      if (ascending) {
        return `M0,${height} C ${c1} ${c2} ${width},0`;
      }

      return `M0,0 C ${c1} ${c2} ${width} ${height}`;
    },
  },
};
</script>

<style lang="scss">
.au-chart {
  width: 100%;
  height: 200px;
  margin-bottom: 32px;
}

.chart-box {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.chart-point-wrap {
  position: relative;
  height: 100%;
  width: 0;
}

.chart-point {
  position: absolute;
  display: flex;
}

.chart-point-dot {
  content: '';
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.5);
  }
}

.chart-point-line {
  width: 0;
  height: 100%;
  margin-left: -1px;
  border-left: 1px dotted #ccc;
}

.chart-curve {
  overflow: visible;
}

// X-axis
.x-axis {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  padding: 8px 0 4px;

  .label {
    display: inline-flex;
    justify-content: center;
    white-space: nowrap;
  }
}
</style>
