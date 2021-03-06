<template>

<div class="au-draggable-list">
  <!-- Выбрать все -->
  <div
    v-if="selectAll"
    class="au-draggable-list-item active no-hover"
  >
    <au-checkbox
      :value="allSelected"
      label="Выбрать все"
      label-left
      class="select-all-checkbox"
      @input="selectAllOptions"
    />
  </div>

  <draggable v-model="itemsList" @sort="$emit('updateList', itemsList)">
    <div
      v-for="(item, index) in itemsList"
      :key="`draggable-${index}`"
      class="au-draggable-list-item"
      :class="{ active: itemsList[index].active, invisible: !visibleItems.includes(item.title) }"
      @click="checkboxInput(index)"
    >
      <au-icon class="icon-drag" icon="mdi-drag-vertical" :size="24" color="#d8d8d8"/>
      <span class="au-draggable-item-title">{{ item.title }}</span>
      <au-checkbox
        :value="itemsList[index].active"
      />
    </div>
  </draggable>
</div>

</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'au-draggable-list',

  components: { draggable },

  props: {
    value: {
      type: Array,
      default: null,
    },
    search: {
      type: String,
      default: null,
    },
    selectAll: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    itemsList: {
      get() {
        return JSON.parse(JSON.stringify(this.value));
      },
      set(val) {
        this.$emit('updateList', val);
      },
    },

    allSelected() {
      return this.itemsList.filter((i) => i.active).length === this.itemsList.length;
    },

    noneSelected() {
      return this.itemsList.filter((i) => !i.active).length === this.itemsList.length;
    },

    visibleItems() {
      if (this.search) {
        return this.itemsList
          .filter((item) => item.title.toLowerCase().includes(this.search.toLowerCase()))
          .map((item) => item.title);
      }

      return this.itemsList.map((item) => item.title);
    },
  },

  methods: {
    checkboxInput(index) {
      const val = this.itemsList[index].active;
      this.itemsList[index].active = !val;
      this.$emit('updateList', this.itemsList);
    },

    selectAllOptions() {
      this.itemsList.forEach((item, index) => {
        if (!this.allSelected) {
          if (!item.active) this.itemsList[index].active = true;
        }
        if (this.noneSelected || this.allSelected) {
          if (item.active) this.itemsList[index].active = false;
        }
      });

      this.$emit('updateList', this.itemsList);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

$bg-inactive: #fbfcfd;
$bg-active: #f8f9fb;

.au-draggable-list {
  width: 100%;
}

.au-draggable-list-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 12px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  margin: 0 0 4px;
  color: #dcddde;
  background-color: $bg-inactive;
  transition: color 0.15s linear;
  user-select: none;
  cursor: pointer;

  &.active {
    color: inherit;
    background-color: $bg-active;
  }

  &.invisible {
    // visibility: hidden;
    overflow: hidden;
    height: 0;
    padding: 0;
    margin: 4px 0;
    border: 4px solid $bg-inactive;

    &.active {
      border-color: $bg-active;
    }
  }

  .icon-drag {
    position: absolute;
    left: -20px;
    cursor: move;
    opacity: 0;
    transition: opacity 0.15s linear;
  }

  &:hover {
    color: $blue;

    .icon-drag {
      opacity: 1;
    }

    &:before {
      opacity: 1;
    }

    &.no-hover {
      color: #2c3e50;
      cursor: default;
    }
  }

  .select-all-checkbox {
    margin-left: auto;
    margin-right: 2px;
  }
}

.au-draggable-item-title {
  margin-right: auto;
}
</style>
