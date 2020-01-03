import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import App from './App'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.component('icon', Icon);

import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
});