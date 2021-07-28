<template>

<div id="app">
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

  <h2>Кнопки</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-button icon="mdi-eye" label="icon='mdi-eye'"/>
      <au-button icon="mdi-eye" white label="icon='mdi-eye' white"/>
      <au-button bordered large label="large"/>
      <au-button white label="white"/>
      <au-button white bordered label="white bordered"/>
      <au-button shadow label="shadow"/>
      <au-button icon="mdi-eye" link label="is link"/>
      <au-button icon="mdi-eye" link white label="is-link white icon"/>
      <au-button icon="mdi-eye" link red label="is-link red icon"/>
      <au-button
        red
        :is-loading="isLoading"
        label="red is-loading"
        icon="mdi-eye"
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
  white
  red</pre>
  </div>

  <h2>Лоадер/спиннер</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-spinner color="red"/>
      <au-spinner color="red" type="fading-circle"/>
    </div>
    <pre>&lt;au-spinner
  color="red" - для "dots"
  type="dots | fading-circle"
  size
/&gt;</pre>
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
