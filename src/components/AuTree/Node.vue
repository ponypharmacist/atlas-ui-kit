<template>

<div
  v-show="forceOpen || !searchLength || isListed"
  class="au-tree-node"
  :class="{ open, parent: hasChildren }"
>
  <div
    class="node-link"
    :class="{ active: isActive }"
    @click="openTree"
  >
    <slot :name="`link${level}`">
      {{ node.title }}

      <au-tooltip content="Создать страницу в категории">
        <div class="node-button">
          <au-icon icon="mdi-plus" :size="16" color="#b1b9c9"/>
        </div>
      </au-tooltip>
    </slot>
  </div>

  <div
    v-if="hasChildren && (open || isListed)"
    class="node-children"
  >
    <au-tree-node
      v-for="item in node.children"
      :key="`n${level + 1}-${item.id}`"
      :node="item"
      :level="level + 1"
      :search="search"
      :force-open="searchLength && open"
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
    search: {
      type: String,
      default: null,
    },
    forceOpen: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      open: false,
    };
  },

  watch: {
    search(newVal) {
      if (newVal?.length > 2) this.open = false;
    },
  },

  computed: {
    hasChildren() {
      return this.node?.children?.length || false;
    },

    searchLength() {
      return this.search?.length > 2 || false;
    },

    isActive() {
      if (!this.searchLength) return false;

      const s = this.search?.toUpperCase();

      return this.node.title?.toUpperCase().includes(s);
    },

    isFoundBySearch() {
      if (!this.searchLength) return false;

      const s = this.search?.toUpperCase();
      const t1 = this.node.title?.toUpperCase();

      const c1 = this.node?.children;
      const t2 = c1?.filter((n) => n.title.toUpperCase().includes(s)).length;

      const c2 = c1?.map((n) => n.children).flat().filter(Boolean);
      const t3 = c2?.filter((n) => n?.title.toUpperCase().includes(s)).length;

      const c3 = c2?.map((n) => n.children).flat() || null;
      const t4 = c3?.filter((n) => n?.title.toUpperCase().includes(s)).length;

      // Пока что поддерживается глубина в 3 уровня
      // Если у кого есть желание сделать рекурсивным и при этом не сломать
      // Я не против, делайте
      return t1.includes(s) || t2 || t3 || t4;
    },

    isListed() {
      return this.searchLength && this.isFoundBySearch;
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
    display: flex;
    justify-content: space-between;
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

    &:hover,
    &.active {
      color: $blue;
      background-color: #f0f4fb;
      border-radius: 3px;

      &:before {
        opacity: 1;
      }
    }

    .node-button {
      display: none;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      margin-left: auto;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(39, 63, 104, 0.07);
      border: 1px solid #b1b9c9;

      &:hover {
        border-color: $blue;
        background-color: $blue;

        & .au-icon {
          background-color: white!important;
        }
      }
    }

    &:hover .node-button {
      display: flex;
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
}

.node-children {
  position: relative;
}
</style>
