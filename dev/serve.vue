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

    <pre>&lt;au-button
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
  large
  shadow
  white
  red
/&gt;</pre>
  </div>

  <h2>Инпут</h2>
  <div class="demo-item">
    <au-input
      v-model="inputModel"
      placeholder="placeholder"
      icon="mdi-eye"
    />

    <au-input
      value="full-width"
      icon="mdi-eye"
      full-width
    />

    <au-input
      value="small"
      icon="mdi-eye"
      small
    />

    <au-input
      value="inputErrors"
      icon="mdi-eye"
      :inputErrors="[1]"
    />

    <au-input
      value="disabled"
      icon="mdi-eye"
      disabled
    />

    <au-input
      value="readonly"
      icon="mdi-eye"
      full-width
      readonly
    />

    <pre>&lt;au-input
  value: [String, Number, Array] {{ inputModel }}
  placeholder: String
  icon: String
  name: String
  inputErrors: Array
  type: String
  mask: [String, Array, Function]

  required
  disabled
  inputDisabled
  autofocus

  fullWidth
  small
  inverse
/&gt;</pre>
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

  <h2>au-dropdown-content-button</h2>
  <au-dropdown-content-button
    label="What, what!"
    :open="false"
    icon="mdi-eye"
  >
    <p>Hello World</p>
  </au-dropdown-content-button>
    <pre>&lt;au-spinner
  label
  icon - передает иконку в au-icon
  large - для крупной au-button внутри компонента
/&gt;</pre>
</div>

</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',

  data() {
    return {
      isLoading: true,
      inputModel: null,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo-item {
  .au-input {
    margin-bottom: 8px;
  }
}
</style>
