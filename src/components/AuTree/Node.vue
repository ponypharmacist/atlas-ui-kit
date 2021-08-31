<template>

<div
  class="au-tree-node"
  :class="{ open, parent: hasChildren }"
>
  <div
    class="node-link"
    @click="openTree"
  >
    <slot :name="`link${level}`">
      {{ node.title }}
    </slot>
  </div>

  <div
    v-if="hasChildren && open"
    class="node-children"
  >
    <au-tree-node
      v-for="item in node.children"
      :key="`n${level + 1}-${item.id}`"
      :node="item"
      :level="level + 1"
    />
  </div>
</div>

</template>

<script>
export default {
  name: 'au-tree-node',

  props: {
    node: {
      type: Object,
      default: null,
    },
    level: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      open: false,
    };
  },

  computed: {
    hasChildren() {
      return this.node?.children?.length || false;
    },
  },

  methods: {
    openTree() {
      if (this.hasChildren) {
        this.open = !this.open;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

.au-tree-node {
  padding-left: 19px;

  .node-link {
    position: relative;
    width: 100%;
    height: 28px;
    padding: 5px;
    line-height: 18px;
    background-color: transparent;
    transition: background-color 0.25s ease;
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      width: 19px;
      height: 18px;
      left: -19px;
      top: 6px;
      opacity: 0.6;
      background: transparent $icon-file;
      transition: opacity 0.25s ease;
    }

    &:hover {
      color: $blue;
      background-color: #f0f4fb;
      border-radius: 3px;

      &:before {
        opacity: 1;
      }
    }
  }

  &.parent > .node-link:before {
    background: transparent $icon-folder;
  }

  &.open > .node-link:before {
    background: transparent $icon-folder-open;
    opacity: 1;
  }

  .au-tree-node {
    .node-link {

      &:after {
        position: absolute;
        content: '';
        width: 6px;
        height: 27px;
        left: -31px;
        top: -11px;
        border-left: thin solid #98bce1;
        border-bottom: thin solid #98bce1;
      }
    }

    &:first-child > .node-link:after {
      height: 19px;
      top: -3px;
    }

    .node-children:before {
      position: absolute;
      content: '';
      width: 6px;
      height: 100%;
      left: -31px;
      top: -11px;
      border-left: thin solid #98bce1;
    }

    &:last-child:first-child,
    &:last-child {
      .node-children:before {
        display: none;
      }
    }
  }

  // .au-tree-node .au-tree-node {
  //   &:not(:last-child) .node-children:before {
  //     left: -50px;
  //   }
  // }
}

.node-children {
  position: relative;
}
</style>
