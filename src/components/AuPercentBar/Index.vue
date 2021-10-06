<template>

<div class="au-percent-bar">
  <div
    class="bar-wrap"
    :style="`background-color: ${defaultColor};`"
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
        :style="`background-color: ${item.color}; width: ${item.percent}%;`"
        class="bar-section"
      />
    </template>
  </div>

  <div
    v-if="data.length && showNumber"
    class="bar-number"
    :style="`color: ${data[defaultIndex].color};`"
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
    defaultColor: {
      type: String,
      default: '#f1f1f1',
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    showNumber: {
      type: Boolean,
      default: false,
    },
    showTooltips: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
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
  height: 10px;
  border: 1px solid #fff;
}

.bar-section {
  display: flex;
  height: 8px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.03);
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
  transition: opacity 0.25s ease;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid #fff;
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
  width: 40px;
  text-align: right;
  font-size: 14px;
  line-height: 16px;
}
</style>
