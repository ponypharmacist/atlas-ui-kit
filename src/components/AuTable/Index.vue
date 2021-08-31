<template>

<div class="au-table">
  <table>
    <thead v-if="!hideThead">
      <tr>
        <!-- Selectable - добавляем чекбокс -->
        <th v-if="selectable" class="checkbox-cell">
          <div class="cell-content">
            <au-checkbox
              v-show="!isLoading"
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

        <!-- Кнопка настроек таблицы -->
        <th
          v-if="settingsIcon"
          class="settings-cell"
        >
          <div class="cell-content">
            <au-icon
              v-if="settingsIcon"
              class="au-table-settings"
              icon="mdi-cog"
              :size="16"
              color="#628ec0"
              @click.native="$emit('settingsIcon')"
            />
          </div>
        </th>
      </tr>
    </thead>

    <!-- Ячейки в строках -->
    <tbody>
      <template v-for="(row, rowIndex) in pageContent">
        <tr
          :key="`table-row-${rowIndex}`"
          :class="{ even: rowIndex % 2 != 0, odd: rowIndex % 2 === 0 }"
        >
          <td v-if="selectable" class="checkbox-cell">
            <div class="cell-content">
              <au-checkbox :value="row.selected" @input="$emit('selectOne', row.id)"/>
            </div>
          </td>

          <td
            v-for="(column, colIndex) in columns"
            :key="`table-cell-${rowIndex}-${column.key}`"
            :colspan="(settingsIcon && colIndex === columns.length - 1) ? 2 : 1"
          >
            <div class="cell-content" :class="`align-${column.align || 'unset'}`">
              <slot
                :name="`item.${column.key}`"
                :item="row"
                :expand="expandRow"
                :is-expanded="isExpanded(row.id)"
              >
                {{ row[column.key] || '-' }}
              </slot>

              <!-- Стрелка для expandable блока -->
              <au-icon
                v-if="colIndex + 1 === columns.length && expanded"
                class="expand-arrow"
                :class="{ expanded: isExpanded(row.id) }"
                icon="mdi-chevron-down"
                :size="20"
                color="#666"
                @click.native="expandRow(row)"
              />
            </div>
          </td>
        </tr>

        <!-- Раскрывающееся дочернее содержимое строки -->
        <tr
          v-if="isExpanded(row.id)"
          :key="`table-row-expanded-${rowIndex}`"
          class="au-table-expanded"
          :class="{ even: rowIndex % 2 != 0, odd: rowIndex % 2 === 0 }"
        >
          <td :colspan="colspanMassActions + 1">
            <div class="cell-content">
              <slot
                name="item.expanded"
                :item="row"
              />
            </div>
          </td>
        </tr>
      </template>

      <tr
        v-for="(placeholder, index) in tableSettings.perPage - pageContent.length"
        :key="`placeholder-tr-${index}`"
        class="placeholder-tr"
      >
        <td :colspan="colspanMassActions + 1">
          <div class="cell-content"></div>
        </td>
      </tr>

      <!-- Если разрешены массовые действия -->
      <tr
        v-if="selectable && pageContent.length && !isLoading"
        class="mass-actions"
      >
        <td class="checkbox-cell">
          <div class="cell-content">
            <au-checkbox
              :value="selectionSummary"
              :partial="selectionSummaryPartial"
              @click.native="$emit('selectAll')"
            />
          </div>
        </td>

        <td :colspan="colspanMassActions">
          <div class="cell-content">
            <slot name="massactions"/>
          </div>
        </td>
      </tr>

      <!-- Если ничего не нашли/не нафильтровали -->
      <tr v-if="!pageContent.length && !isLoading">
        <td
          class="not-found"
          :colspan="colspanNotFound"
        >
          <div class="cell-content">Ничего не найдено</div>
        </td>
      </tr>

      <tr v-if="isLoading">
        <td
          class="not-found"
          :colspan="colspanNotFound"
        >
          <div class="cell-content">
            <au-spinner color="teal"/>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Пагинация -->
  <au-pagination
    v-if="!hidePagination && !isLoading"
    :page="tableSettings.page"
    :per-page="tableSettings.perPage"
    :total="items.length"
    :hide-per-page="hidePerPage"
    @changePage="changePage"
    @changePerPage="changePerPage"
  />

  <div v-if="isLoading && !hidePagination" class="pagination-placeholder"/>
</div>
</template>

<script>
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
    // Expanded
    expanded: {
      type: Array,
      default: null,
    },
    // Внешние настройки пагинации и сортировки
    tableSettings: {
      type: Object,
      default: () => ({
        sortKey: 'name',
        sortDirection: 'asc',
        page: 1,
        perPage: 10,
      }),
    },
    hidePerPage: {
      type: Boolean,
      default: false,
    },
    // Оформление
    isLoading: {
      type: Boolean,
      default: false,
    },
    noDataText: {
      type: String,
      default: 'По вашему запросу ничего не подошло',
    },
    hidePagination: {
      type: Boolean,
      default: false,
    },
    hideThead: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    // Считаем colspan
    colspanMassActions() {
      if (this.settingsIcon) return this.columns.length + 1;

      return this.columns.length;
    },

    colspanNotFound() {
      if (this.selectable && this.settingsIcon) return this.columns.length + 2;
      if (this.selectable) return this.columns.length + 1;
      if (this.settingsIcon) return this.columns.length + 1;

      return this.columns.length;
    },

    // Для чекбоксов от свойства selectable
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
      const key = this.tableSettings.sortKey;
      const direction = this.tableSettings.sortDirection;

      return (column) => {
        const sameKey = key === (column.sortKey || column.key);

        if (sameKey && direction === 'asc') return 'icon-sort-asc';
        if (sameKey && direction === 'desc') return 'icon-sort-desc';
        return 'icon-sort';
      };
    },

    // Выделяем содержимое текущей страницы из списка элементов
    pageContent() {
      // Возможно, не лучший подход
      if (this.isLoading) return [];

      const startAt = (this.tableSettings.page - 1) * this.tableSettings.perPage;
      const endAt = (this.tableSettings.page) * this.tableSettings.perPage;

      return this.items.slice(startAt, endAt);
    },
  },

  methods: {
    // Эмитим данные о сортировке при клике по заголовку столбца
    onColumnClick(column) {
      if (!column.sortable) return;

      const tableSettings = { ...this.tableSettings };
      const sortKey = column.sortKey || column.key;

      if (tableSettings.sortKey !== sortKey) tableSettings.sortDirection = null;

      tableSettings.sortKey = sortKey;

      switch (tableSettings.sortDirection) {
        case null:
          tableSettings.sortDirection = 'asc';
          break;
        case 'asc':
          tableSettings.sortDirection = 'desc';
          break;
        case 'desc':
        default:
          tableSettings.sortKey = null;
          tableSettings.sortDirection = null;
          break;
      }

      this.$emit('changeSettings', { ...tableSettings });
    },

    // Пагинация
    changePage(page) {
      this.$emit('changeSettings', {
        ...this.tableSettings,
        page,
      });
    },

    changePerPage(perPage) {
      this.$emit('changeSettings', {
        ...this.tableSettings,
        page: 1,
        perPage,
      });
    },

    // Expanded
    expandRow({ id }) {
      if (this.expanded?.includes(id)) {
        const index = this.expanded.findIndex((i) => i === id);

        this.expanded.splice(index, 1);
      } else {
        this.expanded.push(id);
      }
    },

    isExpanded(id) {
      return this.expanded?.includes(id) || false;
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

      .cell-content {
        padding-right: 10px;
      }
    }
    th:first-child {
      border-radius: 4px 0 0 4px;
    }
    th:last-child {
      border-radius: 0 4px 4px 0;
    }
  }

  tbody {
    .even {
      background-color: #f3f6f9;
    }

    .odd {
      background-color: #fff;
    }
  }

  th, td {
    padding: 0;
    vertical-align: middle;
  }

  .mass-actions {
    td {
      border: 1px solid #ebeff6;
      background-color: #f0f4fb;
      transition: background-color 0.15s linear;
    }
    td:not(:last-child) {
      border-right: 0;
    }
    td:first-child { border-radius: 4px 0 0 4px; }
    td:last-child {  border-radius: 0 4px 4px 0; }
  }

  .checkbox-cell {
    width: 38px;
  }

  .settings-cell {
    width: 32px;
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
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    background-color: #f3f6f9;

    .cell-content {
      justify-content: center;
    }
  }

  .column-sorting {
    margin-left: auto;
  }
}

.expand-arrow {
  margin-left: auto;
  margin-top: -2px;
  margin-bottom: -2px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.9;
  }

  &.expanded {
    transform: rotate(180deg);
    background-color: $blue!important;
  }
}

.au-table-settings {
  cursor: pointer;

  &:hover {
    background-color: $blue!important;
  }
}

.pagination-placeholder {
  height: 32px;
  background-color: #fafafa;
  border-radius: 5px;
}
</style>
