<template>
  <nav :class="$options.name">
    <div class="au-pagination-left">
      <div
        v-if="pagesCount > 5 && !compactCount"
        :class="{ disabled: page === 1 }"
        class="au-pagination-item start"
        @click.prevent="$emit('changePage', 1)"
      />

      <div
        v-if="pagesCount > 5"
        :class="{ disabled: page === 1 }"
        class="au-pagination-item prev"
        @click.prevent="$emit('changePage', page - 1)"
      />

      <div
        v-for="pageItem in paginationItems"
        :key="pageItem"
        :class="{ active: pageItem === page, disabled: pageItem === '...' }"
        class="au-pagination-item"
        v-text="pageItem"
        @click="$emit('changePage', pageItem)"
      />

      <div
        :class="{ disabled: page + 1 > pagesCount }"
        class="au-pagination-item next"
        @click.prevent="$emit('changePage', page + 1)"
      />

      <div
        v-if="!compactCount"
        :class="{ disabled: page === pagesCount }"
        class="au-pagination-item end"
        @click.prevent="$emit('changePage', pagesCount)"
      />
    </div>

    <div v-if="compactCount" class="au-pagination-center">
      {{ itemsShownFrom }}-{{ itemsShownTo }} из {{ total }}
    </div>

    <div v-else class="au-pagination-center">
      Показаны записи с {{ itemsShownFrom }}
       по {{ itemsShownTo }}
       из {{ total }}
    </div>

    <div v-if="!hidePerPage" class="au-pagination-right">
      <span>Показывать по: </span>
      <au-select
        :value="perPage"
        :list="perPageOptions"
        :clearable="false"
        small
        @change="changePerPage"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'au-pagination',

  props: {
    page: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: null,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    perPageOptions: {
      type: Array,
      default: () => [10, 25, 50, 100],
    },
    hidePerPage: {
      type: Boolean,
      default: false,
    },
    compactCount: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    pagesCount() {
      return Math.ceil(this.total / this.perPage, 10);
    },

    paginationItems() {
      const delta = 3;
      const left = this.page - delta;
      const right = this.page + delta + 1;

      const result = Array.from({ length: this.pagesCount }, ((v, k) => k + 1))
        .filter((i) => i && i >= left && i < right);

      if (result.length > 1) {
        if (result[0] > 1) {
          if (result[0] > 2) {
            result.unshift('...');
          }
          result.unshift(1);
        }

        if (result[result.length - 1] < this.pagesCount) {
          if (result[result.length - 1] !== this.pagesCount - 1) {
            result.push('...');
          }
          result.push(this.pagesCount);
        }
      }

      return result;
    },

    itemsShownFrom() {
      if (!this.total) return 0;

      return (this.page - 1) * this.perPage + 1;
    },

    itemsShownTo() {
      if (this.total < this.perPage) return this.total;
      if (this.total < this.page * this.perPage) return this.total;

      return this.page * this.perPage;
    },
  },

  methods: {
    changePerPage(num) {
      this.$emit('changePerPage', num);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.au-pagination {
  display: flex;
  align-items: center;
}

.au-pagination-left {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.au-pagination-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  height: 32px;
  padding: 0 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: white;
  border: 1px solid $gray-blue-border;
  border-left: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:first-child {
    border-left: 1px solid $gray-blue-border;
  }

  &.active {
    background-color: $light-gray;
    pointer-events: none;
    cursor: default;
  }

  &.disabled {
    pointer-events: none;
    color: darken(white, 10);
  }

  &:hover {
    background-color: $gray-blue-hover;
    color: $blue;
  }

  &.next,
  &.end,
  &.prev,
  &.start {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      background-color: #000;
    }

    &:hover::before {
      background-color: $blue;
    }

    &.disabled::before {
      background-color: #aaa;
    }
  }

  &.next,
  &.prev {
    &:before {
      width: 6px;
      height: 10px;
      -webkit-mask: $icon-arrow;
      mask: $icon-arrow;
    }
  }

  &.end,
  &.start {
    &:before {
      width: 12px;
      height: 10px;
      -webkit-mask: $icon-arrow-double;
      mask: $icon-arrow-double;
    }
  }

  &.start,
  &.prev {
    &:before {
      transform: rotate(180deg);
    }
  }
}

.au-pagination-center {
  // margin: 0 auto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
}

.au-pagination-right {
  display: inline-flex;
  align-items: center;
  margin-left: auto;

  span {
    margin-right: 10px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  }
}
</style>
