import './styles/main.scss';

import Vue from 'vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import atlasUiKit from '@/entry.esm';
import Dev from './serve.vue';

Vue.use(atlasUiKit);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
