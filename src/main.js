import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Home from "./components/views/Home.vue";
import Transferencia from "./components/views/Transferencia.vue";
import Prestamo from "./components/views/Prestamo.vue";
import Pagos from "./components/views/Pagos.vue";
import Tarjeta from "./components/views/Tarjeta.vue";
import Login from "./components/views/Login.vue";
import PageNotFound from "./components/views/PageNotFound.vue";
import { getLSItemData } from "./utils/localStorageHelper";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
  { path: "/home", component: Home },
  { path: "/transferencia", component: Transferencia },
  { path: "/prestamo", component: Prestamo },
  { path: "/pagos", component: Pagos },
  { path: "/tarjeta", component: Tarjeta },
  { name: "Login", path: "/login", component: Login },
  { name: "Logout", path: "/logout", redirect: "/login" },
  { path: "*", component: PageNotFound },
];

import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  const isAuth = getLSItemData("userId");
  if (to.name !== "Login" && !isAuth) return next({ name: "Login" });
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
