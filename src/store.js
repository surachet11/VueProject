import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    number: 100,
    users: []
  },
  mutations: {
    updateNumber(state) {
      state.number += 1;
    },
    upDateUsers(state, data) {
      state.users = data;
    }
  }
});

export default store;
