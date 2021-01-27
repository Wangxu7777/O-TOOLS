import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LOADING: false,
    indexDisplay: false,
    talkActive: false
  },
  mutations: {
    SET_talkActive(state, payload) {
      state.talkActive = payload;
    },
    SET_indexDisplay(state, payload) {
      state.indexDisplay = payload;
    },
    showLoading(state) {
      state.LOADING = true;
    },
    hideLoading(state) {
      state.LOADING = false;
    }
  },
  actions: {},
  modules: {}
});
