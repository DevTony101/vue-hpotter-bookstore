import BookService from "../../services/BookService";

export const namespaced = true;
export const state = {
  books: [],
  cart: [],
  totalPrice: 0,
};

export const mutations = {
  ADD_TO_CART: function(state, book) {
    state.cart.push(book);
  },
  REMOVE_FROM_CART: function(state, index) {
    state.cart.splice(index, 1);
  },
  RESTORE_CART: function(state) {
    state.cart = [];
  },
  UPDATE_TOTAL: function(state, total) {
    state.totalPrice = total;
  },
  SET_BOOKS: function(state, books) {
    state.books = [...books];
  },
};

export const actions = {
  restoreCart: function({ commit }) {
    commit("RESTORE_CART");
  },
  addToCart: function({ commit, getters, dispatch }, book) {
    if (book) {
      let aux = getters.getById(book.id);
      if (aux) {
        book.quantity += parseInt(aux.quantity);
        dispatch("updateCart", book);
      } else {
        commit("ADD_TO_CART", book);
      }
    }
  },
  removeFromCart: function({ state, commit, dispatch }, book) {
    if (book) {
      const index = state.cart.findIndex(e => e.id === book.id);
      commit("REMOVE_FROM_CART", index);
      dispatch("updateTotal");
    }
  },
  updateCart: function({ state }, book) {
    if (book) {
      const index = state.cart.findIndex(e => e.id === book.id);
      state.cart[index] = { ...book };
    }
  },
  updateTotal: function({ state, commit }) {
    commit(
      "UPDATE_TOTAL",
      state.cart.reduce((a, b) => {
        return a + parseInt(b.quantity) * parseInt(b.price);
      }, 0)
    );
  },
  fetchBooks: function({ commit }) {
    return BookService.getBooks()
      .then(response => {
        commit("SET_BOOKS", response.data);
      })
      .catch(console.error);
  },
};

export const getters = {
  cartIsEmpty: function(state) {
    return state.cart.length === 0;
  },
  getById: state => id => {
    return state.cart.find(book => book.id === id);
  },
};
