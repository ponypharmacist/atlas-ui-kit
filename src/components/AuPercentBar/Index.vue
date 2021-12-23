<template>

<div class="au-percent-bar">
  <div
    class="bar-wrap"
    :style="barWrapStyle"
    :class="{ rounded: rounded }"
  >
    <template v-if="showTooltips">
        <div
          v-for="item in data"
          :key="item.color"
          :style="`background-color: ${item.color}; width: ${item.percent}%;`"
          class="bar-section"
        >
          <au-tooltip
            :content="`${item.percent}%`"
          ></au-tooltip>
        </div>
    </template>

    <template v-else>
      <div
        v-for="item in data"
        :key="item.color"
        :style="sectionStyle(item)"
        class="bar-section"
      />
    </template>
  </div>

  <div
    v-if="data.length && showNumber"
    class="bar-number"
    :style="`color: ${numberColor || data[defaultIndex].color};`"
  >
    {{ `${data[defaultIndex].percent}%` }}
  </div>
</div>

</template>

<script>
export default {
  name: 'au-percent-bar',

  props: {
    data: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Number,
      default: 10,
    },
    defaultColor: {
      type: String,
      default: '#f1f1f1',
    },
    borderWidth: {
      type: Number,
      default: 1,
    },
    borderColor: {
      type: String,
      default: '#fff',
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    numberColor: {
      type: String,
      default: null,
    },
    showNumber: {
      type: Boolean,
      default: false,
    },
    showTooltips: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    barWrapStyle() {
      const height = `height: ${this.height}px;`;
      const bg = `background-color: ${this.defaultColor};`;
      const radius = `border-radius: ${this.rounded ? this.height / 2 : 0}px;`;
      const border = `border: ${this.borderWidth}px solid ${this.borderColor}`;

      return `${height}${bg}${radius}${border}`;
    },
  },

  methods: {
    sectionStyle(item) {
      const width = `width: ${item.percent}%;`;
      const bg = `background-color: ${item.color};`;
      const border = `border-right: ${this.borderWidth}px solid ${this.borderColor}`;

      return `${width}${bg}${border}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.au-percent-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 16px;
}

.bar-wrap {
  display: flex;
  width: 100%;

  &.rounded {
    overflow: hidden;
  }
}

.bar-section {
  display: flex;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.03);
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
  transition: opacity 0.25s ease;
  cursor: pointer;

  &:last-child {
    border-right-width: 0;
  }

  &:hover {
    opacity: 0.85;
  }

  & > * {
    width: 100%;
    height: 100%;
  }
}

.bar-number {
  flex: 0 0 auto;
  width: 40px;
  text-align: right;
  font-size: 14px;
  line-height: 16px;
}
</style>
