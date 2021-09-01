<template>

<div
  class="au-tree"
>
  <div v-if="showSearch" class="au-tree-searchbox">
    <au-input
      v-model="search"
      placeholder="Поиск"
      icon="icon-search"
      full-width
      small
      inverse
    />
  </div>

  <au-tree-node
    v-for="node in value"
    :key="`n1-${node.id}`"
    :node="node"
    :search="search"
  />
</div>

</template>

<script>
import AuTreeNode from './Node.vue';

export default {
  name: 'au-tree',

  components: {
    AuTreeNode,
  },

  props: {
    value: {
      type: Array,
      default: null,
    },
    showSearch: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      search: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.au-tree {
  width: 100%;
  font-size: 13px;
}

.au-tree-searchbox {
  margin-bottom: 10px;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ebeff6;
  background-color: #f0f4fb;
}
</style>
