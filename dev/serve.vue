<template>

<div id="app">
  <h2>Кнопки</h2>
  <div class="demo-item">
    <div class="d-flex">
      <au-button bordered icon="account-group">bordered</au-button>
      <au-button bordered large>large</au-button>
      <au-button inverse>inverse</au-button>
      <au-button shadow>shadow</au-button>
      <au-button red>red</au-button>
    </div>

    <pre>.au-button
  to: [Object, String]
  href: String
  tag: 'a | router-link | button ...'
  type="button | submit | reset"
  blockedRights: Array - не используется нигде

  icon: String
  label: String

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
      <au-icon icon="account-group" size="24"/>
      <div> .au-icon icon="account-group" size="24"</div>
    </div>
  </div>

  <div class="demo-item">
    <ul class="icons-list">
      <li
        v-for="icon in iconsList"
        :key="`icon-${icon}`"
      ><au-icon :icon="icon"/>&nbsp;{{ icon }}</li>
    </ul>
  </div>
</div>

</template>

<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import {
  AuButton,
  // AuInput,
} from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AuButton,
    // AuInput,
  },

  data() {
    return {
      inputValue: 'Input text',
      iconsList: [
        'account-group',
        'aspect-ratio',
        'cog',
        'download',
        'eye',
        'paperclip',
      ],
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
