<template>

<div
  class="au-tree"
>
  <au-tree-node
    v-for="node in value"
    :key="`n1-${node.id}`"
    :node="node"
  />
  <!-- <div
    v-for="node in value"
    :key="`n1-${node.id}`"
    class="au-tree-node"
    :class="{ open }"
  >
    <div class="node-link">
      <slot name="link">
        {{ node.title }}
      </slot>
    </div>

    <div
      v-if="node.children && node.children.length"
      class="node-children"
    >
      node children
    </div>
  </div> -->
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
  },

  data() {
    return {
      open: [],
    };
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.au-tree {
  width: 100%;
  font-size: 13px;
}
</style>
