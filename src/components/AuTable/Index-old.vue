<template>
  <div :class="$options.name">
    <div class="au-table__topic">
      <div
        v-for="(item, index) in preparedColumns"
        :key="`table-column-${index}`"
        :style="{ width: getColumnWidth(item) }"
        class="au-table__topic-item"
        @click="onColumnClick(item)"
      >
        <p v-if="!getColumnIconName(item)">
          {{ getColumnName(item) }}
        </p>

        <au-icon
          v-if="getColumnIconName(item)"
          :icon="getColumnIconName(item)"
          :size="15"
          color="#333"
        />

        <div
          v-if="item.sortable"
          :class="[`${item.sort || ''}`]"
          class="column-sorting"
        >
          <au-icon
            :size="10"
            :icon="iconSort(item)"
          />
        </div>
      </div>
    </div>

    <ul v-if="list && list.length" class="au-table__list">
      <li
        v-for="rowLine in list.length"
        :key="`row-item-${rowLine}`"
        :class="getRowItemClass(rowLine)"
        class="au-table__item"
      >
        <div class="au-table__item-box table-row">
          <div
            v-for="(key, index) in columnValues"
            :key="`${rowLine}-${key}`"
            :style="{
              width: getColumnWidthByValue(key),
              justifyContent: getColumnAlignByValue(key),
            }"
            class="au-table__item-col"
          >
            <template v-if="index === 0">
              <label
                v-if="selectable"
                :class="['checkbox', {
                    'checkbox--disabled': isParentDisabled(rowLine),
                  }]"
              >
                <input
                  type="checkbox"
                  name="fake"
                  :checked="isParentChecked(list[rowLine - 1])"
                  :value="!!list[rowLine - 1].id"
                  @click="checkParent($event.target.checked,
                  list[rowLine - 1],
                  rowLine)"
                >
                <div class="checkbox__box" />
              </label>
              <div
                v-if="childrenProperty"
                :class="{
                  open: openedItems.includes(rowLine),
                  disabled: !itemHasChildren(list[rowLine - 1]),
                }"
                class="au-table__item-folder folder"
                @click="onFolderClick(rowLine)"
              />
            </template>

            <slot :name="`item.${key}`" :item="list[rowLine - 1]">
              {{ getListValue(rowLine, key) }}
            </slot>
          </div>
        </div>

        <div
          v-if="itemHasChildren(list[rowLine - 1])"
          class="au-table__item-children"
        >
          <div
            v-for="childrenRowLine in list[rowLine - 1][childrenProperty].length"
            :key="`${rowLine}-${childrenRowLine}-children`"
            :class="getChildrenRowItemClass(rowLine, childrenRowLine)"
            class="au-table__item-box"
          >
            <div
              v-for="(key, index) in columnValues"
              :key="`${rowLine}-${key}`"
              :style="{
                width: getColumnWidthByValue(key),
                justifyContent: getColumnAlignByValue(key)
              }"
              class="au-table__item-col"
            >
              <template v-if="index === 0">
                <label
                  v-if="selectable"
                  :class="['checkbox', {
                    'checkbox--disabled': isChildrenDisabled(rowLine),
                  }]"
                >
                  <input
                    type="checkbox"
                    name="fake"
                    :checked="
                    isChildrenChecked(list[rowLine - 1][childrenProperty][childrenRowLine - 1])"
                    @click="checkChildren($event.target.checked,
                    list[rowLine - 1],
                    list[rowLine - 1][childrenProperty][childrenRowLine - 1],
                    rowLine)"
                  >
                  <div class="checkbox__box" />
                </label>
                <div class="au-table__item-folder subfolder" />
              </template>

              <slot
                :name="`children.${key}`"
                :item="list[rowLine - 1][childrenProperty][childrenRowLine - 1]"
                :parent="list[rowLine - 1]"
              >
                {{ getChildrenValue(rowLine, childrenRowLine, key) }}
              </slot>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div v-else class="no-data">
      <au-spinner v-if="isLoading" :size="56" color="#2A3F64" />
      <template v-else>{{ noDataText }}</template>
    </div>
  </div>
</template>

<script>
import get from 'lodash/get';
import uniqBy from 'lodash/uniqBy';
import isEmpty from 'lodash/isEmpty';
import intersection from 'lodash/intersection';
import groupBy from 'lodash/groupBy';

/**
 * Every item in array required value field
 * @param columns Array
 */
const columnPropertyValidation = (columns) => !!columns
  .map((_) => Object.prototype.hasOwnProperty.call(_, 'value'))
  .filter(Boolean).length;

export default {
  name: 'au-table',

  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
    columns: {
      type: Array,
      required: true,
      validator: columnPropertyValidation,
    },
    childrenColumns: {
      type: Array,
      default: () => ([]),
    },
    childrenProperty: {
      type: String,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    activeRouteTracker: {
      type: Array,
      default: () => ([]),
    },
    noDataText: {
      type: String,
      default: 'Список пуст',
    },
    currentSort: {
      type: Object,
      default: () => ({}),
    },
    pageSettings: {
      type: Object,
      default: null,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    isResetCheckbox: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    preparedColumns: [],
    openedItems: [],
    checkedChildren: [],
    checkedParent: [],
    allTransitions: [],
    filteredTransitions: [],
    filteredParentId: [],
    filteredChildrenId: [],
    iconName: String,
  }),

  computed: {
    // for detecting children checking/unchecking
    isChildrenChecked() {
      return (item) => {
        if (isEmpty(this.checkedChildren)) {
          return false;
        }

        const checkedLine = this.checkedChildren.find((_) => _.checkedActions.includes(item.id));

        return !!checkedLine;
      };
    },

    // for detecting parent checking/unchecking
    isParentChecked() {
      return (item) => {
        if (isEmpty(this.checkedParent)) {
          return false;
        }

        const checkedLine = this.checkedParent.find((_) => _.parentId === item.id);

        return !!checkedLine;
      };
    },

    // for disabling parent checkbox, if all children checked
    isParentDisabled() {
      return (rowLine) => {
        const checkedLine = this.checkedChildren.find((_) => _.rowLine === rowLine);
        if (!checkedLine) return null;

        return checkedLine.actionsLength === checkedLine.checkedActions.length;
      };
    },

    // for disabling children checkbox, if parent checked
    isChildrenDisabled() {
      return (rowLine) => {
        const checkedLine = this.checkedParent.find((_) => _.rowLine === rowLine);

        return !!checkedLine;
      };
    },

    getRowItemClass() {
      return (line) => ({
        open: this.openedItems.includes(line),
        'active-route': this.currentActiveRouteParamId
          && this.currentActiveRouteParamId
          === this.getListValue(line, get(this.activeRouteTrackerNow, 'param')),
      });
    },

    getChildrenRowItemClass() {
      return (rowLine, childrenRowLine) => ({
        'active-route': this.currentActiveRouteParamId
          && this.currentActiveRouteParamId
          === this.getChildrenValue(
            rowLine,
            childrenRowLine,
            get(this.activeRouteTrackerNow, this.activeRouteTrackerNow.paramGetter),
          ),
      });
    },

    getColumnName() {
      return (column) => {
        const item = this.getItemFromColumns(column);
        return get(item, 'name', item.value);
      };
    },

    getColumnIconName() {
      return (column) => {
        const item = this.getItemFromColumns(column);
        const name = get(item, 'iconName');
        if (name) this.iconName = name;
        return name;
      };
    },

    getColumnWidth() {
      return (column) => {
        const item = this.getItemFromColumns(column);
        // todo sum for every width value of another columns
        return `${get(item, 'width', 100 / this.columns.length)}%`;
      };
    },

    getColumnWidthByValue() {
      return (value) => {
        const column = this.columns.find((_) => _.value === value);
        if (!column) return null;
        return this.getColumnWidth(column);
      };
    },

    getColumnAlign() {
      return (column) => {
        const item = this.getItemFromColumns(column);
        return get(item, 'align', 'flex-start');
      };
    },

    getColumnAlignByValue() {
      return (value) => {
        const column = this.columns.find((_) => _.value === value);
        if (!column) return null;
        return this.getColumnAlign(column);
      };
    },

    getItemFromColumns() {
      return (item) => {
        const needle = this.columns.find((_) => _.value === item.value);
        if (needle) return needle;

        throw Error(`Columns property doesnt have item with '${item.value}' value`);
      };
    },

    itemHasChildren() {
      return (item) => Object.prototype.hasOwnProperty.call(item, this.childrenProperty)
        && item[this.childrenProperty].length;
    },

    getListValue() {
      return (index, valueKey) => get(this.list[index - 1], valueKey, null);
    },

    getChildrenValue() {
      return (index, childrenIndex, valueKey) => get(
        this.list[index - 1][this.childrenProperty][childrenIndex - 1],
        valueKey,
        null,
      );
    },

    columnValues() {
      return this.preparedColumns.map((_) => _.value);
    },

    childrenColumnValues() {
      return this.childrenColumns.map((_) => _.value);
    },

    hasActiveRouteTracking() {
      return Array.isArray(this.activeRouteTracker) && this.activeRouteTracker.length;
    },

    activeRouteTrackerNow() {
      if (!this.hasActiveRouteTracking) return null;
      const active = this.activeRouteTracker.find((_) => _.name === this.$route.name);
      if (!active) return null;

      return {
        ...active,
        paramGetter: Object.keys(active).includes('itemParam') ? 'itemParam' : 'item',
      };
    },

    currentActiveRouteParamId() {
      const active = this.activeRouteTrackerNow;
      if (!active) return null;

      const param = get(this.$route.params, active.param, null);
      return param !== null ? parseInt(param, 10) : null;
    },
  },

  watch: {
    pageSettings: {
      immediate: true,
      deep: true,
      handler() {
        this.resetCheckbox();
      },
    },
    columns: {
      immediate: true,
      handler(columns) {
        this.preparedColumns = columns
          .map((item) => ({ sort: null, ...item }));
      },
    },
    isResetCheckbox: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val) {
          this.resetCheckbox();
        }
      },
    },
    allTransitions: {
      immediate: true,
      deep: true,
      handler() {
        this.checkForTransitions();
      },
    },
  },

  methods: {
    // full reset of checkbox and filter
    resetCheckbox() {
      this.allTransitions = [];
      this.filteredTransitions = [];
      this.filteredChildrenId = [];
      this.filteredParentId = [];
      this.checkedParent = [];
      this.checkedChildren = [];
    },

    // reset only for transitions
    resetFilter() {
      this.filteredTransitions = [];
      this.filteredChildrenId = [];
      this.filteredParentId = [];
    },

    // eslint-disable-next-line consistent-return
    checkForTransitions() {
      if (!get(this.allTransitions, 'length')) {
        this.$emit('transition-check', []);
        return false;
      }

      this.filteredTransitions = [];
      this.filteredChildrenId = [];
      this.filteredParentId = [];

      // array of transition types, with modal
      const blockedTypes = ['to_back_from_clarification', 'to_correction', 'to_clarification'];

      // filtering checked transition and pushing all of them to array

      // eslint-disable-next-line no-const-assign,no-plusplus
      for (let i = 0; i < this.allTransitions.length; i++) {
        const item = this.allTransitions[i];
        const rowTransitions = get(item, 'transitions', []);

        if (rowTransitions.length === 0) {
          this.resetFilter();
          this.$emit('transition-check', []);
          break;
        }

        const transitions = Object.keys(groupBy(item.transitions, 'name'));

        // eslint-disable-next-line array-callback-return
        transitions.filter((block, key) => {
          if (blockedTypes.includes(block)) {
            transitions.splice(key, 1);
          }
        });

        this.filteredTransitions.push(transitions);

        if (item.isChildren) {
          const childObj = {
            parentId: item.parentId,
            childId: item.childId,
          };

          this.filteredChildrenId.push(childObj);
        } else {
          this.filteredParentId.push(item.parentId);
        }
      }

      this.filteredTransitions = intersection(...this.filteredTransitions);

      const result = [];

      // eslint-disable-next-line array-callback-return,consistent-return
      this.filteredTransitions.filter((item, key) => {
        const transitionObj = {
          transition: item,
          id: key,
        };

        result.push(transitionObj);
      });

      this.$emit('transition-check',
        {
          transitions: uniqBy(result, 'transition'),
          parent: this.filteredParentId,
          children: this.filteredChildrenId,
        });
    },

    checkParent(isChecked, parent, rowLine) {
      if (!parent.transitions) return;

      const itemObj = {
        parentId: parent.id,
        transitions: [...parent.transitions],
        rowLine,
      };

      if (isChecked === true) {
        this.checkedParent.push(itemObj);
        this.allTransitions.push(itemObj);
      } else {
        const index = this.checkedParent
          .findIndex((indexItem) => indexItem.rowLine === rowLine);
        const transitionIndex = this.allTransitions
          .findIndex((item) => item.parentId === parent.id);

        if (index > -1) {
          this.checkedParent.splice(index, 1);
        }

        if (transitionIndex > -1) {
          this.allTransitions.splice(transitionIndex, 1);
        }
      }
    },

    checkChildren(isChecked, parent, child, rowLine) {
      // object for collecting all checked actions,
      // to disable parent checkbox then,
      // in case if, all children checked
      const itemObj = {
        parentId: parent.id,
        actionsLength: parent.actions.length,
        checkedActions: [child.id],
        rowLine,
      };

      // object for collecting all checked transitions separately
      const transition = {
        transitions: [...child.transitions],
        parentId: parent.id,
        isChildren: true,
        childId: child.id,
      };

      if (isChecked === true) {
        const index = this.checkedChildren.findIndex((item) => item.parentId === parent.id);

        if (index > -1) {
          // passing id of checked children to array
          this.$set(this.checkedChildren[index], 'checkedActions',
            [...this.checkedChildren[index].checkedActions, child.id]);
        } else {
          this.checkedChildren.push(itemObj);
        }

        this.allTransitions.push(transition);
      } else {
        // eslint-disable-next-line max-len
        const transitionIndex = this.allTransitions
          .findIndex((item) => item.childId === child.id);
        const parentIndex = this.checkedChildren.findIndex((item) => item.parentId === parent.id);
        const childIndex = this.checkedChildren[parentIndex].checkedActions
          .findIndex((item) => item === child.id);

        if (childIndex > -1) {
          this.checkedChildren[parentIndex].checkedActions.splice(childIndex, 1);
        }

        if (parentIndex > -1 && this.checkedChildren[parentIndex].checkedActions.length === 0) {
          this.checkedChildren.splice(parentIndex, 1);
        }

        if (transitionIndex > -1) {
          this.allTransitions.splice(transitionIndex, 1);
        }
      }
    },

    resetOpenedFolders() {
      this.openedItems = [];
    },

    onFolderClick(index) {
      if (!this.itemHasChildren(this.list[index - 1])) return;

      const needleIndex = this.openedItems.findIndex((_) => _ === index);
      if (needleIndex === -1) {
        this.openedItems.push(index);
        return;
      }

      this.openedItems.splice(needleIndex, 1);
      this.openedItems = this.openedItems.filter(Boolean);
    },

    onColumnClick(item) {
      if (!item.sortable) return;

      const currentSort = { ...this.currentSort };

      const sortProperty = get(item, 'sortProperty', item.value);

      if (currentSort.field !== sortProperty) {
        currentSort.dir = null;
      }

      currentSort.field = sortProperty;

      switch (currentSort.dir) {
        case null:
          currentSort.dir = 'asc';
          break;
        case 'asc':
          currentSort.dir = 'desc';
          break;
        case 'desc':
        default:
          currentSort.field = null;
          currentSort.dir = null;
          break;
      }

      this.$emit('sort', { ...currentSort });
    },

    iconSort(item) {
      if (this.currentSort.field === (item.sortProperty || item.value) && this.currentSort.dir === 'asc') {
        return 'icon-sort-asc';
      }

      if (this.currentSort.field === (item.sortProperty || item.value) && this.currentSort.dir === 'desc') {
        return 'icon-sort-desc';
      }

      return 'icon-sort';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-table__topic {
  position: relative;
  display: flex;
  background-color: $light-gray;
  border: 1px solid $gray-blue-border;
  border-radius: 4px;

  .au-table__topic-item {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.1px;
    height: 36px;
    border-left: 1px solid $gray-blue-border;
    padding: 0 10px;
    cursor: pointer;
    justify-content: space-between;

    &:first-child {
      border-left: 0;
    }
  }
}

.au-table__list {
  position: relative;
  list-style: none;
}

.au-table__item {
  position: relative;
  /*overflow: hidden;*/
  border: 1px solid transparent;
  border-radius: 4px;
  transition: border-color .3s;

  &::after {
    content: '';
  }

  &:nth-child(odd) {
    & > .au-table__item-box {
      background-color: $white;
      // border: 1px solid transparent;
    }
  }

  &:nth-child(even) {
    & > .au-table__item-box {
      background-color: $gray-blue-hover;
      // border: 1px solid $gray-blue-border;
    }
  }
  &:hover {

    & > .au-table__item-box {
      background-color: rgba(234,242,255,0.77);
      box-shadow: inset 0 0 0 1px #D5DFF1;
    }
  }

  & > .au-table__item-box {
    border-radius: 1px;

    .au-table__item-folder.folder {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 0;
        background-color: #98BCE1;
        top: calc(100% + 5px);
        left: 7px;
        overflow: hidden;
        opacity: 0;
        transition: opacity 0.5s ease-out;
      }
    }
  }

  .au-table__item-children {
    .au-table__item-box {
      .au-table__item-folder {
        &::before {
          content: '';
          position: absolute;
          width: 1px;
          height: calc(100% + 2px);
          background-color: #98BCE1;
          top: -1px;
          left: 40px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        &::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 1px;
          background-color: #98BCE1;
          top: calc(50% - 1px);
          left: 40px;
          opacity: 0;
          transition: opacity 0.3s;
        }
      }
      &:last-child {
        .au-table__item-folder {
          &::before {
            height: calc(50% + 1px);
          }
        }
      }
    }
  }

  &.open {
    box-shadow: 0 3px 7px rgba(103, 149, 176, 0.21);
    /*overflow: hidden;*/
    border: 1px solid $gray-blue-border;

    & > .au-table__item-box {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      .au-table__item-folder.folder {
        &::before {
          opacity: 1;
          height: 66px;
          overflow: visible;
          transition: opacity 0.5s ease-in;
        }
      }
    }

    .au-table__item-children {
      max-height: 100vh;
      overflow: visible;
      transition: max-height 0.5s ease-in;

      .au-table__item-box {
        opacity: 1;
        overflow: visible;
        transition: opacity 0.5s ease-in;

        .au-table__item-folder {
          &::before {
            opacity: 1;
            transition: opacity 0.3s;
          }

          &::after {
            opacity: 1;
            transition: opacity 0.3s;
          }
        }

        &:last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;

          .au-table__item-folder {
            &::before {
              height: calc(50% + 1px);
            }
          }
        }
      }
    }
  }

  &.active-route {
    border: 1px solid transparentize($blue, .77);

    &::after {
      position: absolute;
      top: 0;
      right: -1px;
      width: 4px;
      height: 100%;
      background-color: $blue;
      border-top-right-radius: 1px;
      border-bottom-right-radius: 1px;
    }
  }

  &-box {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 40px;

    &::v-deep .status-action-buttons {
      position: relative;
      justify-content: flex-end;
      width: 100%;

      .btn-component {
        position: relative;
        justify-content: flex-start;
        max-width: max-content;
        flex: 1 1 auto;
        overflow: hidden;
        transition: flex 0.5s;

        &:hover {
          flex: 1 0 auto;
          transition: flex 0.5s;
          z-index: 2;

          &:after {
            background: linear-gradient(to right, rgba(0, 0, 0, 0), #3F6ADA 80%);
            opacity: 0;
            width: 0;
            transition: width .5s, background .5s, opacity .5s;
          }
        }

        &:after {
          content: '';
          position: absolute;
          background: linear-gradient(to right, rgba(0, 0, 0, 0), #fff 80%);
          height: 100%;
          width: 20px;
          top: 0;
          right: 0;
          opacity: 1;
          transition: width .5s, background .5s, opacity .5s;
        }
      }
    }

    .au-table__item-col {
      min-height: 40px;
    }

  }

  &-col {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px;
    font-size: 12px;
    line-height: 16px;
  }

  &-folder {
    min-width: 15px;
    width: 15px;
    height: 13px;
    margin-right: 8px;

    &.folder {
      background: url("../../assets/icons/icon-folder-closed.svg") no-repeat center;
      background-size: contain;
      cursor: pointer;
      transition: 0.3s;

      &.open {
        background: url("../../assets/icons/icon-folder-open.svg") no-repeat center;
        background-size: contain;
        transition: 0.3s;
      }

      &.disabled {
        pointer-events: none;
        opacity: .5;
      }

      .administration-templates-view & {
        display: none;
      }
    }

    &.subfolder {
      background: url("../../assets/icons/icon-subfolder.svg") no-repeat;
      background-position: center;
      background-size: contain;
      cursor: default;
      margin-left: 23px;
    }
  }

  &-name {
    font-size: 12px;
    line-height: 16px;
    max-height: 48px;
    color: $black;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    transition: 0.3s;

    &:hover {
      color: $blue;
      transition: 0.3s;
    }
  }

  &-importance {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid $white;

    &.none{
      display: none;
    }

    &.one {
      background-color: $green;
    }

    &.two {
      background-color: $yellow;
    }
  }

  &-created,
  &-author{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
  }
  &-responsible{
    font-size: 12px;
    line-height: 16px;
    & span{
      font-weight: 500;
      margin-right: 4px;
    }
  }
  &-status{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 26px;
    max-width: 100%;
    padding: 1px 10px 1px 90px;
    border-radius: 2px;
    &.new{
      background-color: $gray-blue-border;
    }
    &.work{
      background-color: $yellow;
    }
  }

  &-time{
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    background-color: $white;
    color: $black;
    height: 24px;
    width: 71px;
    padding: 2px 0 0 22px;
    border-radius: 2px 0 0 2px;
    left: 1px;
    top: 1px;

    &::before{
      content: '';
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      width: 12px;
      height: 12px;
      background: url("../../assets/icons/icon-time-black.svg") no-repeat;
      background-position: center;
      background-size: contain;
    }
    &::after{
      content: '';
      position: absolute;
      right: -16px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 12px solid transparent;
      border-left: 8px solid $white;
    }
    &.red{
      background-color: $red;
      color: $white;

      &::before{
        background: url("../../assets/icons/icon-time-white.svg") no-repeat;
        background-position: center;
        background-size: contain;
      }
      &::after{
        border-left: 8px solid $red;
      }
    }
  }
  &-type{
    font-size: 11px;
    text-align: center;
  }
  &-children{
    position: relative;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    max-height: 0;

    .au-table__item-box {
      min-height: 50px;
      background-color: $white;
      border-top: 1px solid $gray-blue-border;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.5s ease-out;
      /*border: 1px solid transparent;*/

      &::after {
        content: '';
      }

      &.active-route {
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          width: 3px;
          height: 100%;
          background-color: $blue;
        }
      }

      .au-table__item-col {
        min-height: 50px;
      }
    }
  }
}

.no-data {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: $gray;
}
</style>
