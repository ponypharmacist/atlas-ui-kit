<template>
  <div
    v-clickaway="onClickAway"
    :class="classObject"
    :id="`au-select--${selectId}`"
  >

    <label v-if="label">{{ label }}</label>

    <div
      :class="{ active: isActive }"
      class="au-select-selected"
      @click="showList()"
    >
      <au-icon
        v-if="clearable && isValidValue"
        class="au-select-clear"
        icon="mdi-close"
        :size="iconSize"
        color="#bbb"
        @click.native.stop="model = null"
      />

      <template v-if="isValidValue">
        <span
          v-if="!multiselect"
          class="au-select-text"
        >
          {{ selectedText }}
        </span>

        <div v-else class="chips">
          <div
            v-for="(item, index) in selectedText"
            :key="index"
            v-text="item"
            class="chips-item"
            @click.stop="model.splice(index, 1)"
          />
        </div>
      </template>

      <span
        v-else-if="placeholder"
        v-text="placeholder"
        class="au-select-placeholder"
      />
    </div>

    <!-- List -->
    <ul
      :class="[{
        active: isActive,
        top: top,
        bottom: bottom,
      }]"
      class="au-select-list"
      v-if="isActive"
    >
      <div
        v-if="list.length > 15 || searchQuery"
        class="au-select-list__search"
      >
        <au-input
          v-model="searchQuery"
          placeholder="Поиск по списку"
          inverse
          small
          full-width
        />
      </div>

      <li
        v-if="!listData || !listData.length"
        class="au-select-item disabled"
      >
        {{ noDataText }}
      </li>

      <li
        v-for="(item, index) in listData"
        :key="`select-item-${index}`"
        :class="{ selected: isSelected(item) }"
        class="au-select-item"
        @click="onItemClick(item)"
      >
        <slot name="item" :item="item">{{ item[valueField] || item }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
import { directive as clickaway } from 'vue-clickaway';
import uniqueId from 'lodash/uniqueId';

export default {
  name: 'au-select',

  directives: { clickaway },

  model: {
    event: 'change',
    prop: 'value',
  },

  props: {
    value: {
      type: [Number, String, Object, Array],
      default: null,
    },
    list: {
      type: Array,
      default: () => ([]),
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Выберите из списка',
    },
    noDataText: {
      type: String,
      default: 'Список пуст',
    },
    idField: {
      type: String,
      default: null,
    },
    valueField: {
      type: String,
      default: null,
    },

    returnObject: {
      type: Boolean,
      default: false,
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
    },

    multiselect: {
      type: Boolean,
      default: false,
    },

    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    tiny: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    // selectedText: null,
    selectId: null,
    isActive: false,
    searchQuery: null,
    top: false,
    bottom: false,
  }),

  created() {
    this.selectId = uniqueId('select');
  },

  computed: {
    classObject() {
      return {
        [this.$options.name]: true,
        'is-small': this.small,
        'is-tiny': this.tiny,
        'is-inverse': this.inverse,
        'is-disabled': this.disabled,
        'is-clearable': this.clearable,
      };
    },

    model: {
      get() {
        return this.value;
      },

      set(newValue) {
        this.$emit('change', newValue);
      },
    },

    listData() {
      if (!this.searchQuery || this.searchQuery === '') return this.list;

      return this.list
        .filter(
          (item) => (item[this.valueField] || item)
            .toLowerCase()
            .indexOf(this.searchQuery.toLowerCase()) !== -1,
        );
    },

    selectedText() {
      if (Array.isArray(this.value)) {
        return this.value.map((chip) => {
          if (chip[this.valueField]) return chip[this.valueField];
          if (chip.value) return chip.value;

          const reference = this.list
            .find((item) => item[this.idField] === chip);
          if (reference) return reference[this.valueField];

          return chip || 'Label not found';
        });
      }

      if (typeof this.value === 'object' && this.value !== null) {
        return this.value[this.valueField] || this.value.value;
      }

      const reference = this.list.find((item) => item[this.idField] === this.value);
      if (reference) return reference[this.valueField];

      return this.value;
    },

    isValidValue() {
      if (this.multiselect) return Array.isArray(this.value) && this.value.length;

      return this.value !== null;
    },

    iconSize() {
      if (this.small) return 18;
      if (this.tiny) return 16;

      return 20;
    },
  },

  methods: {
    onItemClick(item) {
      const readyValue = this.getSelectedValue(item);

      if (!this.multiselect && this.value === readyValue) {
        // this.model = null;
        return;
      }

      if (this.multiselect && this.value?.includes(readyValue)) {
        const index = this.value.findIndex((i) => i === readyValue);
        const newValue = [...this.value];

        newValue.splice(index, 1);

        this.model = newValue.filter(Boolean);
        return;
      }

      this.model = this.multiselect ? [...(this.value || []), readyValue] : readyValue;

      if (this.closeOnSelect && !this.multiselect) {
        this.onClickAway();
      }
    },

    isSelected(item) {
      if (this.multiselect) {
        return (this.value || []).includes(item[this.idField] || item);
      }

      return this.value === (item[this.idField] || item);
    },

    getSelectedValue(item) {
      if (this.returnObject && typeof item === 'object') return item;

      if (typeof item === 'object') {
        return item[this.idField] || item.id;
      }

      return item;
    },

    onClickAway() {
      this.isActive = false;
      this.searchQuery = null;
    },

    showList() {
      this.isActive = !this.isActive;
      if (this.isActive === true) {
        this.getPosition();
      }
    },

    getPosition() {
      // eslint-disable-next-line consistent-return
      this.$nextTick(() => {
        const el = document.querySelector(`#au-select--${this.selectId}`);
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (windowHeight - rect.bottom < 290) {
          this.bottom = false;
          this.top = true;
        } else {
          this.top = false;
          this.bottom = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";
@import "../../styles/partials/mixins";

.au-select {
  position: relative;
  width: auto;
  min-height: 40px;
  min-width: 60px;
  font-size: 14px;
  user-select: none;

  label {
    display: inline-block;
    margin-bottom: 5px;
    padding-left: 1px;
    font-size: 13px;
    line-height: 16px;
    font-family: inherit;
    font-weight: 500;
  }

  &.is-small {
    min-height: 32px;
    font-size: 12px;

    label {
      font-size: 12px;
      line-height: 14px;
    }

    .au-select-item,
    .au-select-selected {
      min-height: 32px;
      // margin-top: 5px;
      // margin-bottom: 5px;
    }
  }

  &.is-tiny {
    min-height: 24px;
    font-size: 11px;

    .au-select-placeholder,
    .au-select-selected {
      font-size: 11px;
    }

    label {
      font-size: 12px;
      line-height: 14px;
    }

    .au-select-item,
    .au-select-selected {
      min-height: 24px;
    }
  }

  .au-select-item,
  .au-select-selected {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 40px;
    font-weight: 500;
    background-color: white;
    padding: 0 8px;
    cursor: pointer;
  }

  .au-select-placeholder {
    font-weight: 300;
    color: #9F9F9F;
    white-space: nowrap;
  }

  .au-select-selected {
    border-radius: 2px;
    border: 1px solid $gray-blue-border;
    background-color: $light-gray;
    overflow: hidden;
    // color: $blue;
    font-weight: 400;
    font-size: 12px;
    white-space: nowrap;

    &::before {
      content: "";
      position: absolute;
      width: 27px;
      height: 100%;
      background-color: $light-gray;
      border-left: 1px solid $gray-blue-border;
      right: 0;
      top: 0;
    }

    &::after {
      content: "";
      -webkit-mask: $icon-arrow;
      mask: $icon-arrow;
      background-color: #333;
      width: 6px;
      height: 11px;
      position: absolute;
      transform: translate(-50%, -50%) rotate(90deg);
      top: 50%;
      right: 8px;
      transition: 0.3s;
    }

    &.active {
      border-radius: 2px 2px 0 0;
      &::after {
        transform: translate(-50%, -50%) rotate(270deg);
        transition: 0.3s;
      }
    }
  }

  &.is-disabled {
    opacity: .7;
    pointer-events: none;
  }

  &.is-inverse {
    .au-select-selected {
      background-color: white;

      &::before {
        background-color: white;
      }
    }
  }

  .au-select-clear {
    position: absolute;
    right: 34px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .au-select-item {
    &:hover {
      background-color: $gray-blue-border;
    }

    &.selected {
      background-color: transparentize($gray, .9);
      color: $blue;

      &:hover {
        background-color: transparentize($gray, .7);
      }
    }

    &.disabled {
      pointer-events: none;
      color: #9F9F9F;
    }
  }

  // List
  $max-list-height: 160;

  .au-select-list {
    position: absolute;
    width: 100%;
    background-color: white;
    border: 1px solid $gray-blue-border;
    box-shadow: 0 2px 2px rgba(100,100,100, 0.15);
    max-height: #{$max-list-height}px;
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: 0 0 0 2px;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    z-index: 1;

    &.top {
      top: unset;
      bottom: 100%;
      box-shadow: 0 -1px 2px rgba(100,100,100, 0.15);
    }

    &.bottom {
      top: 100%;
      bottom: unset;
    }

    &.active {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      height: 4px;
      width: 4px;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 4px #f7f7f7;
      box-shadow: inset 0 0 4px #f7f7f7;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $gray-blue-border;
      border-radius: 2px;
      outline: none;
      background-clip: border-box;
      cursor: pointer;
    }
  }

  .au-select-text {
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.is-clearable {
    .au-select-text {
      max-width: calc(100% - 48px);
    }
  }

  /* todo add chips for all sizes */
  .chips {
    padding: 4px 20px 4px 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: -4px;

    .chips-item {
      font-size: 11px;
      border: 1px solid $gray-blue-border;
      padding: 4px;
      background-color: white;
      border-radius: 3px;
      margin-top: 4px;
      margin-right: 4px;
    }
  }

  .au-select-list__search {
    display: flex;
    flex-wrap: nowrap;
    padding: 8px;
  }
}
</style>
