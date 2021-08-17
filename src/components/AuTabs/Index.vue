<template>
  <div :class="$options.name">
    <div class="au-tabs-list">
      <a
        v-for="item in tabs"
        :key="item.id"
        :class="{ active: item.id === activeItem }"
        class="au-tabs-list-item"
        @click.prevent="onTabClick(item.id, item)"
      >
        <h5>{{ item.name }} <sup v-if="item.count !== null" v-text="item.count" /></h5>
      </a>
    </div>

    <div class="au-tabs-item">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'au-tabs',

  data: () => ({
    activeItem: null,
    isResolved: false,
    tabs: [],
  }),

  created() {
    this.tabs = this.$children;
  },

  mounted() {
    this.tabs = this.$children;

    if (this.tabs.length) {
      this.activeItem = this.tabs[0].id;
      this.onTabClick(this.activeItem, this.tabs[0]);
    }
  },

  methods: {
    onTabClick(itemId) {
      this.tabs.forEach((component) => {
        // eslint-disable-next-line no-param-reassign
        component.isActive = (component.id === itemId);
      });

      this.activeItem = itemId;
      this.$emit('tab-change');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-tabs {
  margin-bottom: ($mm-value * 8) + px;
}

.au-tabs-list {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $gray-blue-border;
}

.au-tabs-list-item {
  position: relative;
  color: $gray;
  padding: ($mm-value * 3) + px 0;
  margin-right: 24px;
  transition: 0.3s;
  user-select: none;
  cursor: pointer;

  h5 {
    font-size: 14px;
    margin-bottom: 0;
    color: inherit;
    font-weight: 500;
  }

  sup {
    font-size: 10px;
    font-weight: 400;
    color: #9db9d1;
  }

  &:hover {
    color: $blue;
  }

  &.active {
    color: $darkblue;
    cursor: default;

    &::before {
      opacity: 1;
      transition: .3s;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $blue;
    left: 0;
    bottom: -1px;
    opacity: 0;
    transition: 0.3s;
  }
}

.au-tabs-item {
  margin: ($mm-value * 4) + px 0 0;
}
</style>
