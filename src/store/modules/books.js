export const namespaced = true;
export const state = {
  cart: [],
};

export const mutations = {
  ADD_TO_CART: function(state, book) {
    state.cart.push(book);
  },
  REMOVE_FROM_CART: function(state, book) {
    state.cart.splice(state.cart.indexOf(book), 1);
  },
};

export const actions = {
  addToCart: function({ commit }, book) {
    if (book) {
      commit("ADD_TO_CART", book);
    }
  },
  removeFromCart: function({ commit }, book) {
    if (book) {
      commit("REMOVE_FROM_CART", book);
    }
  },
};
