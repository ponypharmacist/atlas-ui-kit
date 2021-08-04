<template>

<div class="au-breadcrumbs">
  <div
    class="breadcrumb-item"
    v-for="(route, index) in routes"
    :key="`breadcrumb-${index}`"
    :class="{ 'last': index === routes.length - 1 }"
  >
    <router-link :to="route.to">{{ route.title || 'Страница' }}</router-link>
  </div>

  <router-link
    v-if="routes.length > 1"
    class="link-back"
    :to="routes[routes.length - 2].to"
  >
    Вернуться назад
  </router-link>
</div>

</template>

<script>
export default {
  name: 'au-breadcrumbs',

  computed: {
    routes() {
      return this.$route.matched
        .map((record) => ({
          to: { name: record.name },
          title: record?.meta?.breadcrumb || null,
        }))
        .filter((record) => record.title);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/partials/params";

$icon-backarrow: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDkyIDIzNkg2OC40NDJsNzAuMTY0LTY5LjgyNGM3LjgyOS03Ljc5MiA3Ljg1OS0yMC40NTUuMDY3LTI4LjI4NC03Ljc5Mi03LjgzLTIwLjQ1Ni03Ljg1OS0yOC4yODUtLjA2OGwtMTA0LjUwNCAxMDQtLjAxOC4wMTljLTcuODA5IDcuNzkyLTcuODM0IDIwLjQ5Ni0uMDAyIDI4LjMxNGwuMDE4LjAxOSAxMDQuNTA0IDEwNGM3LjgyOCA3Ljc5IDIwLjQ5MiA3Ljc2MyAyOC4yODUtLjA2OCA3Ljc5Mi03LjgyOSA3Ljc2Mi0yMC40OTItLjA2Ny0yOC4yODRMNjguNDQyIDI3Nkg0OTJjMTEuMDQ2IDAgMjAtOC45NTQgMjAtMjBzLTguOTU0LTIwLTIwLTIweiIvPjwvc3ZnPg==") no-repeat 50% 50% / contain;

.au-breadcrumbs {
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 16px 0;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
}

.link-back {
  position: relative;
  margin-left: auto;
  white-space: nowrap;
  cursor: pointer;
  padding-left: 21px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 13px;
    height: 18px;
    -webkit-mask: $icon-backarrow;
    mask: $icon-backarrow;
    background-color: $blue;
  }
}

.breadcrumb-item {
  align-self: center;
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0 14px 0 8px;
  height: 18px;
  flex: 0 0 auto;
  white-space: nowrap;
  color: #c9cbca;

  &:first-child {
    margin-left: 0;
  }

  a {
    display: inline-block;
    height: 18px;
    line-height: 18px;
    text-decoration: none;
  }

  &::after {
    position: absolute;
    content: '/';
    right: -14px;
  }

  &.last {
    color: #c9cbca;

    &::after {
      display: none;
    }

    a {
      cursor: default;
      color: #c9cacc;
      pointer-events: none;
    }
  }
}
</style>
