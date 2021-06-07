import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //counter: 0,
    cuentas: [],
  },
  actions: {
    /* increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    }, */
    setCuentas({ commit }, payload) {
      commit("setCuentas", payload);
    },
  },
  mutations: {
    setCuentas(state, payload) {
      state.cuentas = payload;
    },
    /* decrement(state) {
      state.counter--;
    }, */
  },
  getters: {
    /* getCounter: (state) => {
      return state.counter;
    }, */
    getCuentas: (state) => {
      return state.cuentas;
    },
  },
});
