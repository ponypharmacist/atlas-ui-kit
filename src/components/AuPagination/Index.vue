<template>
  <nav :class="$options.name">
    <div class="au-pagination-left">
      <a
        v-if="pagesCount > 5"
        :class="{ disabled: page === 1 }"
        class="au-pagination-item start"
        @click.prevent="$emit('changePage', 1)"
      />

      <a
        v-if="pagesCount > 5"
        :class="{ disabled: page === 1 }"
        class="au-pagination-item prev"
        @click.prevent="$emit('changePage', page - 1)"
      />

      <a
        v-for="pageItem in paginationItems"
        :key="pageItem"
        :class="{ active: pageItem === page, disabled: pageItem === '...' }"
        class="au-pagination-item"
        href="#"
        v-text="pageItem"
        @click="$emit('changePage', pageItem)"
      />

      <a
        :class="{ disabled: page + 1 > pagesCount }"
        class="au-pagination-item next"
        @click.prevent="$emit('changePage', page + 1)"
      />

      <a
        :class="{ disabled: page === pagesCount }"
        class="au-pagination-item end"
        @click.prevent="$emit('changePage', pagesCount)"
      />
    </div>

    <div class="au-pagination-center">
      Показаны записи с {{ (page - 1) * perPage + 1 }}
       по {{ page * perPage }}
       из {{ total }}
    </div>

    <div class="au-pagination-right">
      <au-select
        v-model="perPageSelection"
        :list="perPageOptions.filter((o) => o <= total)"
        :clearable="false"
        small
        close-on-select
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
    perPage: {
      type: Number,
      default: null,
    },
    total: {
      type: Number,
      default: null,
    },
    pagesCount: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      perPageSelection: 5,
      perPageOptions: [5, 10, 25, 50],
    };
  },

  computed: {
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
  font-size: 12px;
  font-weight: 500;
  background-color: white;
  border: 1px solid $gray-blue-border;
  border-left: none;
  width: 32px;
  height: 32px;
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
  margin: 0 auto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
}
.au-pagination-right {
  margin-left: auto;
}
</style>
