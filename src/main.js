import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from "./components/views/Home.vue";
import Transferencia from "./components/views/Transferencia.vue";
import Prestamo from "./components/views/Prestamo.vue";
import Pagos from "./components/views/Pagos.vue";
import Login from "./components/views/Login.vue";
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: "/home", component: Home },
  { path: "/transferencia", component: Transferencia },
  { path: "/prestamo", component: Prestamo },
  { path: "/pagos", component: Pagos },
  { path: "/login", component: Login },
];

import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes,
  mode: 'hash'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
