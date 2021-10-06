<template>
  <div :class="$options.name">
    <div :id="parentId" class="au-tabs-bar">
      <div :id="visibleId" class="au-tabs-list">
        <a
          v-for="item in tabs"
          :key="`tab-${uid}-${item.id}`"
          :class="{ active: item.id === activeItem }"
          class="au-tabs-list-item"
          @click.prevent="onTabClick(item.id, item)"
        >
          <h5>{{ item.name }} <sup v-if="item.count !== null" v-text="item.count" /></h5>
        </a>
      </div>

      <div v-show="showFiltersMenu" class="quick-filter-button">
        <span>···</span>
        <div :id="hiddenId" class="au-tabs-hidden"></div>
      </div>
    </div>

    <div class="au-tabs-item">
      <slot />
    </div>
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId';

export default {
  name: 'au-tabs',

  data: () => ({
    activeItem: null,
    isResolved: false,
    tabs: [],
    uid: null,
    showFiltersMenu: false,
  }),

  created() {
    this.tabs = this.$children;
    this.uid = uniqueId();
  },

  computed: {
    parentId() {
      return `au-tabs-${this.uid}`;
    },

    visibleId() {
      return `au-tabs-list-${this.uid}`;
    },

    hiddenId() {
      return `au-tabs-hidden-${this.uid}`;
    },
  },

  mounted() {
    this.tabs = this.$children;

    if (this.tabs.length) {
      this.activeItem = this.tabs[0].id;
      this.onTabClick(this.activeItem, this.tabs[0]);
    }

    window.addEventListener('resize', this.resizeMenu);
    this.resizeMenu();
    this.$nextTick(() => {
      this.resizeMenu();
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeMenu);
  },

  methods: {
    resizeMenu() {
      const parent = document.getElementById(this.parentId);
      const visibleList = document.getElementById(this.visibleId);
      const hiddenList = document.getElementById(this.hiddenId);
      const baseOffset = 88;

      [...visibleList.children].forEach(() => {
        const toHide = visibleList.children[visibleList.children.length - 1];
        const stillOverflow = parent.offsetWidth < (visibleList.offsetWidth + toHide.offsetWidth + baseOffset);

        if (stillOverflow) {
          hiddenList.appendChild(toHide);
        }
      });

      [...hiddenList.children].forEach(() => {
        const toShow = hiddenList.children[hiddenList.children.length - 1];
        const willOverflow = parent.offsetWidth < (visibleList.offsetWidth + toShow.offsetWidth + baseOffset);

        if (!willOverflow) {
          visibleList.appendChild(toShow);
        }
      });

      this.showFiltersMenu = hiddenList?.children.length;
    },

    onTabClick(itemId) {
      this.tabs.forEach((component) => {
        // eslint-disable-next-line no-param-reassign
        component.isActive = (component.id === itemId);
      });

      this.activeItem = itemId;
      this.$emit('tab-change', itemId);
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

.au-tabs-bar {
  display: flex;
  width: 100%;
  max-width: 100%;
  border-bottom: 1px solid $gray-blue-border;
}

.au-tabs-list {
  display: flex;
  align-items: center;
}

.au-tabs-hidden {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  visibility: hidden;
  position: absolute;
  max-height: 400px;
  overflow-y: auto;
  right: 0;
  top: 24px;
  padding: 0 12px 0 12px;
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 5px;
  cursor: default;

  .au-tabs-list-item {
    padding: 6px 0;
    margin: 0;

    &:before {
      display: none;
    }
  }
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
    white-space: nowrap;
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

.quick-filter-button {
  position: relative;
  flex: 0 0 auto;
  height: 24px;
  padding: 4px 8px 2px;
  margin: 0 4px 0 auto;
  top: 8px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 4px;
  background-color: #f0f4fb;
  white-space: nowrap;
  cursor: pointer;

  span {
    writing-mode: vertical-rl;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 8px;
    text-align: center;
    height: 100%;
    display: inline-block;
  }

  &:hover .au-tabs-hidden {
    visibility: visible;
    z-index: 1;
  }
}

.au-tabs-item {
  margin: ($mm-value * 4) + px 0 0;
}
</style>
