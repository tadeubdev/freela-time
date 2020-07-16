import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import './registerServiceWorker';
import Storage from 'vue-web-storage';
import router from './router';
import store from './store';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Storage);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
