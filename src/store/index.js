import Vue from "vue";
import Vuex from "vuex";
import * as books from "./modules/books";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    books,
  },
  state: {
    colorTheme: window.localStorage.getItem("hpbookstore-theme") ?? "light",
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
        window.localStorage.setItem("hpbookstore-theme", "light");
      } else if (state.colorTheme === "dark") {
        commit("SET_COLOR_THEME", "light");
        document.body.classList.replace("dark", "light");
        window.localStorage.setItem("hpbookstore-theme", "dark");
      }
    },
  },
});
