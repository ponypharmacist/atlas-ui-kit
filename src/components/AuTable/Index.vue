<template>

<div class="au-table">
  <au-icon
    v-if="settingsIcon"
    class="au-table-settings"
    icon="mdi-cog"
    :size="16"
    color="#628ec0"
    @click.native="$emit('settings')"
  />

  <table>
    <thead>
      <tr>
        <!-- Selectable - добавляем чекбокс -->
        <th v-if="selectable && pageContent.length" class="checkbox-cell">
          <div class="cell-content">
            <au-checkbox
              :value="selectionSummary"
              :partial="selectionSummaryPartial"
              @click.native="$emit('selectAll')"
            />
          </div>
        </th>

        <th
          v-for="column in columns"
          :key="`column-${column.key}`"
          :style="{ width: column.width ? column.width + 'px' : null }"
          @click="onColumnClick(column)"
        >
          <div class="cell-content">
            <slot :name="`header.${column.key}`" :item="column">
              <span>{{ column.title }}</span>
            </slot>

            <!-- Сортировка -->
            <div
              v-if="column.sortable"
              class="column-sorting"
            >
              <au-icon :size="10" :icon="iconSort(column)"/>
            </div>
          </div>
        </th>
      </tr>
    </thead>

    <!-- Ячейки в строках -->
    <tbody>
      <tr
        v-for="(row, index) in pageContent"
        :key="`table-row-${index}`"
      >
        <td v-if="selectable" class="checkbox-cell">
          <div class="cell-content">
            <au-checkbox :value="row.selected" @input="$emit('selectOne', row.id)"/>
          </div>
        </td>

        <td
          v-for="column in columns"
          :key="`table-cell-${index}-${column.key}`"
        >
          <div class="cell-content" :class="`align-${column.align || 'unset'}`">
            <slot
              :name="`item.${column.key}`"
              :item="row"
            >
              {{ row[column.key] || '-' }}
            </slot>
          </div>
        </td>
      </tr>

      <!-- Если ничего не нашли/не нафильтровали -->
      <tr>
        <td
          class="not-found"
          v-if="!pageContent.length"
          :colspan="columns.length"
        >
          Ничего не найдено
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Пагинация -->
  <au-pagination
    :page="pageCurrent"
    :per-page="itemsPerPage"
    :total="items.length"
    :pages-count="pagesCount"
    @changePage="changePage"
    @changePerPage="changePerPage"
  />
</div>
</template>

<script>
import get from 'lodash/get';

export default {
  name: 'au-table',

  props: {
    items: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    // Опции
    selectable: {
      type: Boolean,
      default: false,
    },
    settingsIcon: {
      type: Boolean,
      default: false,
    },
    // Внешние настройки пагинации и сортировки
    sort: {
      type: Object,
      default: () => {},
    },
    // pageCurrent: {
    //   type: Number,
    //   default: 1,
    // },
    // itemsPerPage: {
    //   type: Number,
    //   default: 5,
    // },
    // Оформление
    noDataText: {
      type: String,
      default: 'По вашему запросу ничего не подошло',
    },
  },

  data() {
    return {
      pageCurrent: 1,
      itemsPerPage: 5,
    };
  },

  computed: {
    selectionSummary() {
      const selectedCount = this.items.filter((item) => item.selected).length;

      if (selectedCount === this.items.length) return true;
      return false;
    },

    selectionSummaryPartial() {
      const selectedCount = this.items.filter((item) => item.selected).length;
      return !!selectedCount && selectedCount < this.items.length;
    },

    // Сортировка
    sortableColumns() {
      return this.columns.filter((c) => c.sortable);
    },

    iconSort() {
      return (column) => {
        const sameKey = this.sort.key === (column.sortKey || column.key);

        if (sameKey && this.sort.direction === 'asc') return 'icon-sort-asc';
        if (sameKey && this.sort.direction === 'desc') return 'icon-sort-desc';
        return 'icon-sort';
      };
    },

    // Выделяем содержимое текущей страницы из списка элементов
    pageContent() {
      const startAt = (this.pageCurrent - 1) * this.itemsPerPage;
      const endAt = (this.pageCurrent) * this.itemsPerPage;

      return this.items.slice(startAt, endAt);
    },

    pagesCount() {
      return Math.ceil(this.items.length / this.itemsPerPage, 10);
    },
  },

  methods: {
    // Эмитим данные о сортировке при клике по заголовку столбца
    onColumnClick(column) {
      if (!column.sortable) return;

      const sort = { ...this.sort };
      const sortKey = get(column, 'sortKey', column.key);

      if (sort.key !== sortKey) sort.direction = null;

      sort.key = sortKey;

      switch (sort.direction) {
        case null:
          sort.direction = 'asc';
          break;
        case 'asc':
          sort.direction = 'desc';
          break;
        case 'desc':
        default:
          sort.key = null;
          sort.direction = null;
          break;
      }

      this.$emit('runSort', { ...sort });
    },

    // Пагинация
    changePage(page) {
      this.pageCurrent = page;
    },

    changePerPage(perPage) {
      this.pageCurrent = 1;
      this.itemsPerPage = perPage;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

// Таблица
.au-table {
  position: relative;

  table {
    width: 100%;
    margin-bottom: 16px;
    text-align: left;
    border-spacing: 0;
    border-collapse: separate;
  }

  thead {
    th {
      font-weight: 500;
      border: 1px solid #ebeff6;
      background-color: #f0f4fb;
      transition: background-color 0.15s linear;
      cursor: pointer;

      &:hover {
        border-color: #e1e9f7;
        background-color: #e1e8f5;
      }
    }
    th:not(:last-child) {
      border-right: 0;
    }
    th:first-child { border-radius: 4px 0 0 4px; }
    th:last-child {  border-radius: 0 4px 4px 0; }
  }

  tbody {
    tr:nth-child(2n) {
      background-color: #f3f6f9;
    }
  }

  th, td {
    padding: 0;
    vertical-align: middle;
  }

  .checkbox-cell {
    width: 38px;
  }

  .cell-content {
    display: flex;
    align-items: center;
    min-height: 32px;
    padding: 8px 11px;
    font-size: 12px;
    line-height: 16px;

    &.align-left { justify-content: flex-start; }
    &.align-right { justify-content: flex-end; }
    &.align-center { justify-content: center; }
  }

  .not-found {
    text-align: center;
  }

  .column-sorting {
    margin-left: auto;
  }
}

.au-table-settings {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  &:hover {
    background-color: $blue!important;
  }
}
</style>
