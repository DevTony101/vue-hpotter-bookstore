import { apiClient } from "./axiosClient";

export default {
  getBooks: function() {
    return apiClient.get("/books");
  },
  getBook: function(id) {
    return apiClient.get(`/books/${id}`);
  },
  putBook: function(book) {
    return apiClient.put(`/books/${book.id}`, book);
  },
};
