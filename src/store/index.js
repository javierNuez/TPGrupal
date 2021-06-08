import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cuentas: [],
    prestamos: [],
  },
  actions: {
    setCuentas({ commit }, payload) {
      commit("setCuentas", payload);
    },
    setPrestamos({ commit }, payload) {
      commit("setPrestamos", payload);
    },
  },
  mutations: {
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
