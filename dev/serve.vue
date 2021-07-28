<template>

<div id="app">
  <h2>Кнопки</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-button bordered icon="mdi-eye" label="bordered icon='mdi-eye'"/>
      <au-button bordered large label="large"/>
      <au-button inverse label="inverse"/>
      <au-button shadow label="shadow"/>
      <au-button
        red
        :is-loading="isLoading"
        label="red is-loading"
        @click="isLoading = !isLoading"
      />
    </div>

    <pre>.au-button
  to: [Object, String]
  href: String
  tag: 'a | router-link | button ...'
  type="button | submit | reset"

  icon: String - 'mdi-eye | icon-eye'
  label: String - текст кнопки

  isLoading
  disabled

  link
  fullWidth
  bordered
  small
  large
  shadow
  inverse
  red</pre>
  </div>

  <h2>Лоадер</h2>
  <div class="demo-item">
  </div>

  <h2>Иконки</h2>
  <div class="demo-item">
    <div class="d-flex align-center">
      <au-icon icon="mdi-eye" :size="24"/>
      <div> <code>&lt;au-icon icon="<b>mdi-eye</b>" size="24"/&gt;</code>
       - берет иконку '<b>eye.svg</b>' из @mdi/svg/svg</div>
    </div>

    <div class="d-flex align-center">
      <au-icon icon="icon-avatar" :size="24"/>
      <div> <code>&lt;au-icon icon="<b>icon-avatar</b>" size="24"/&gt;</code>
       - берет иконку '<b>icon-avatar.svg</b>' из @/assets/icons/ текущего проекта</div>
    </div>

    <div class="d-flex align-center">
      <au-icon icon="mdi-eye" :color="'#FF6C59'" :size="24"/>
      <div> <code>&lt;au-icon icon="mdi-eye" <b>color="#FF6C59"</b>/&gt;</code>
       - цвет</div>
    </div>
  </div>
</div>

</template>

<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.';

export default Vue.extend({
  name: 'ServeDev',

  data() {
    return {
      inputValue: 'Input text',
      isLoading: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.icons-list {
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    font-family: monospace;
    font-size: 16px;
  }
}
</style>
