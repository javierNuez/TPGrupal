import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { getLSItemData } from "../utils/localStorageHelper";
import { formatTime } from "../utils/dateHelper";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cuentas: [],
    prestamos: [],
    pagos: [],
  },
  actions: {
    setResetState({ commit }) {
      commit("resetState");
    },
    setCuentas({ commit }, payload) {
      commit("setCuentas", payload);
    },
    getPrestamos({ commit }) {
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
    getPagos({ commit }) {
      const dni = getLSItemData("userId");
      axios
        .get(`https://vuebank-api.herokuapp.com/pagos/${dni}`)
        .then((res) => {
          const datos = res.data;
          if (!datos.length) return (this.usuarioSinCuentas = true);
          commit("setPagos", datos);
        });
    },
    realizarPago(context, idServicio) {
      const dni = getLSItemData("userId");
      const body = {
        dni,
        idServicio,
      };
      axios
        .post(`https://vuebank-api.herokuapp.com/pagos/pagar`, body)
        .then((res) => {
          const datos = res.data;
          context.commit("setPagoActualizado", {
            ...datos.updatedService,
            pagada: true,
            fechaPago: formatTime(new Date()),
          });
        });
    },
  },
  mutations: {
    resetState(state) {
      state.cuentas = [];
      state.prestamos = [];
    },
    setCuentas(state, payload) {
      state.cuentas = payload;
    },
    setPrestamos(state, payload) {
      state.prestamos = payload;
    },
    setPagos(state, payload) {
      state.pagos = payload;
    },
    setPagoActualizado(state, payload) {
      const index = state.pagos.findIndex(
        (item) => item.idServicio === payload.idServicio
      );
      state.pagos.splice(index, 1, payload);
    },
  },
  getters: {
    getPagos: (state) => {
      return state.pagos;
    },
    getServiciosPagados: (state) => {
      return state.pagos.filter((pago) => pago.pagada);
    },
    getServiciosPorPagar: (state) => {
      return state.pagos.filter((pago) => !pago.pagada);
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
