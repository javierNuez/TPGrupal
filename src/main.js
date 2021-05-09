import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Serie from './components/Serie.vue'
import Pelicula from './components/Pelicula.vue'
import Home from "./components/Home.vue";
import Transferencia from "./components/Transferencia.vue";
import Formulario from "./components/Formulario.vue";
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: "/series", component: Serie },
  { path: "/peliculas", component: Pelicula },
  { path: "/home", component: Home },
  { path: "/transferencia", component: Transferencia },
  { path: "/formulario", component: Formulario },
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
