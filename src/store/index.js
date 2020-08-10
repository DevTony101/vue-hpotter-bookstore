import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    colorTheme: "light",
  },
  mutations: {
    SET_COLOR_THEME: function(state, theme) {
      state.colorTheme = theme;
    },
  },
  actions: {
    toggleTheme: function({ state, commit }) {
      if (state.colorTheme === "light") {
        commit("SET_COLOR_THEME", "dark");
        document.body.classList.replace("light", "dark");
      } else if (state.colorTheme === "dark") {
        commit("SET_COLOR_THEME", "light");
        document.body.classList.replace("dark", "light");
      }
    },
  },
});
