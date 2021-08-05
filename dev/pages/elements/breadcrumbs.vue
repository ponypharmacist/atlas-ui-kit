<template>

<div class="demo-breadcrumbs">
  <h2 id="au-breadcrumbs">Хлебные крошки</h2>
  <div class="demo-item">
    <div class="au-breadcrumbs">
      <div
        class="breadcrumb-item"
        v-for="(route, index) in routes"
        :key="`breadcrumb-${index}`"
        :class="{ 'last': index === routes.length - 1 }"
      >
        <a href="#">
          {{ route.title || 'Страница' }}
        </a>
      </div>

      <a
        v-if="routes.length > 1"
        class="link-back"
        href="#"
      >
        Вернуться назад
      </a>
    </div>

    <pre>&lt;au-breadcrumbs/&gt;</pre>

    <p>Компонент использует настройки vue-router для определения пути. Для этого в <b>meta</b> роута должен быть прописан параметр <b>breadcrumb</b>.</p>

    <pre>{
  path: '/',
  name: 'Home',
  component: () => import('../pages/Home.vue'),
  meta: {
    breadcrumb: 'Главная'
  },
}</pre>
  </div>
</div>

</template>

<script>
export default {
  name: 'demo-breadcrumbs',

  data() {
    return {
      routes: [
        {
          to: { name: 'Home' },
          title: 'Главная',
        },
        {
          to: { name: 'Page' },
          title: 'Текущая страница',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../src/styles/partials/params";

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
    color: $blue;
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
