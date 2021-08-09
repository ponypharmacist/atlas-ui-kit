<template>

<div class="au-draggable-list">
  <draggable v-model="itemsList">
    <div
      v-for="(item, index) in itemsList"
      :key="`draggable-${index}`"
      class="au-draggable-list-item"
      :class="{ active: itemsList[index].active }"
    >
      <au-icon class="icon-drag" icon="mdi-drag-vertical" :size="24" color="#d8d8d8"/>
      <span class="au-draggable-item-title">{{ item.title }}</span>
      <au-checkbox v-model="itemsList[index].active"/>
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
  },

  computed: {
    itemsList: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('updateList', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

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
  background-color: #fbfcfd;
  transition: color 0.15s linear;
  user-select: none;
  cursor: pointer;

  &.active {
    color: inherit;
    background-color: #f8f9fb;
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
  }
}

.au-draggable-item-title {
  margin-right: auto;
}
</style>
