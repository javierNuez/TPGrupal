import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  getters: {
    getCounter: (state) => {
      return state.counter;
    },
  },
});
