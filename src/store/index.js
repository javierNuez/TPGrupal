import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cuentas: [],
    prestamos: [],
    pagos:[],
  },
  actions: {
    setCuentas({ commit }, payload) {
      commit("setCuentas", payload);
    },
    setPrestamos({ commit }, payload) {
      commit("setPrestamos", payload);
    },
    setPagos({ commit }, payload) {
      commit("setPagos", payload);
    },
  },
  mutations: {
    setCuentas(state, payload) {
      state.cuentas = payload;
    },
    setPrestamos(state, payload) {
      state.prestamos = payload;
    },
    setPagos(state, payload) {
      state.pagos = payload;
    },
  },
  getters: {
    getPagos: (state) => {
      return state.pagos;
    },
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
