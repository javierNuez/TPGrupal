import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { getLSItemData } from "../utils/localStorageHelper";

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {
    cuentas: [],
    prestamos: [],
  },
  actions: {
    setResetState({ commit }) {
      commit("resetState")
    },
    setCuentas({ commit }, payload) {
      commit("setCuentas", payload);
    },
    // setPrestamos({ commit }, payload) {
    //   commit("setPrestamos", payload);
    // },
    getPrestamos({ commit }){
      const dni = getLSItemData("userId");
      axios
        .get(`https://vuebank-api.herokuapp.com/prestamos/${dni}`)
        .then((res) => {
          const datos = res.data;
          if (!datos.length) return (this.usuarioSinCuentas = true);
          commit("setPrestamos", datos);
        });
      },
    getCuentas({ commit }) {
    const dni = getLSItemData("userId");
    axios
      .get(`https://vuebank-api.herokuapp.com/accounts/${dni}`)
      .then((res) => {
        const datos = res.data;
        if (!datos.length) return (this.usuarioSinCuentas = true);
        commit("setCuentas", datos);
      });
  },
  },
  mutations: {
    resetState(state) {
      state.cuentas = []
      state.prestamos = []
    },
    setCuentas(state, payload) {
      state.cuentas = payload;
    },
    setPrestamos(state, payload) {
      state.prestamos = payload;
    },
  },
  getters: {
    getCuentas: (state) => {
      return state.cuentas;
    },
    getPrestamos: (state) => {
      return state.prestamos;
    },
    getTranferencias: ({ cuentas }) => {
      const arrayTranferencias = [];
      cuentas.forEach((cuenta) => {
        cuenta.movimientos.forEach((mov) => {
          if (mov.descripcion !== "Prestamo") {
            const movConMoneda = {
              ...mov,
              monto: `${cuenta.moneda === "pesos" ? "$" : "u$s"}${mov.monto}`,
            };
            arrayTranferencias.push(movConMoneda);
          }
        });
      });
      return arrayTranferencias;
    },
  },
});
