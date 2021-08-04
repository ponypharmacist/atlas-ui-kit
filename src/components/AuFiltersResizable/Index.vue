<template>

<div id="quick-filters">
  <div id="quick-filters-list">
    <div
      v-for="(item, index) in value"
      :key="`filter-${index}`"
      class="quick-filter-item"
      :class="{ 'active': item.value }"
      @click="toggleItem(index)"
    >
      {{ item.title }}
    </div>
  </div>

  <div v-show="showFiltersMenu" class="quick-filter-button">...
    <div id="quick-filters-hidden"></div>
  </div>
</div>

</template>

<script>
export default {
  name: 'au-filters-resizable',

  props: {
    value: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showFiltersMenu: false,
    };
  },

  mounted() {
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
      const parent = document.getElementById('quick-filters');
      const visibleList = document.getElementById('quick-filters-list');
      const hiddenList = document.getElementById('quick-filters-hidden');
      const baseOffset = 48;

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

    toggleItem(index) {
      this.value[index].value = !this.value[index].value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

#quick-filters {
  display: flex;
  width: 100%;
}

#quick-filters-list {
  display: flex;
}

#quick-filters-hidden {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  visibility: hidden;
  position: absolute;
  right: 0;
  top: 24px;
  cursor: default;
}

.quick-filter-item,
.quick-filter-button {
  flex: 0 0 auto;
  height: 24px;
  padding: 4px 8px 2px;
  margin: 0 4px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 4px;
  background-color: #f0f4fb;
  white-space: nowrap;
  cursor: pointer;
}

.quick-filter-item {
  &:hover {
    color: $blue;
  }

  &.active {
    color: #fff;
    background-color: #3F6ADA;
  }
}

.quick-filter-button {
  position: relative;

  &:hover #quick-filters-hidden {
    visibility: visible;
    z-index: 1;
  }

  .quick-filter-item {
    margin: 4px 0;
  }
}
</style>
