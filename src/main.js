import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import routes from './router/index'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
	routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App) // default trigger create element method
})