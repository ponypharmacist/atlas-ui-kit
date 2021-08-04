<template>

<div class="demo-sidebar">
  <ul>
    <li
      v-for="(item, index) in sidebarItems"
      :key="`${item.alias || index}`"
    >
      <template v-if="item.alias">
        <a :href="`#${item.alias}`">{{ item.title }}</a>
        <div>{{ item.alias }}</div>
      </template>

      <div v-else class="sidebar-title">{{ item.title }}</div>
    </li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'demo-sidebar',

  props: {
    sidebarItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-sidebar {
  flex: 0 0 auto;
  width: 260px;
  overflow-y: auto;

  ul {
    margin: 20px;
    list-style-type: none;
  }

  li {
    margin: 10px 0;

    a {
      font-size: 16px;
    }

    div {
      font-size: 14px;
      color: #999;
    }

    .sidebar-title {
      margin-top: 24px;
      color: #222;
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>
