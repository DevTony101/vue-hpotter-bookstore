import { AxiosClient } from "./axios-client";

export const BookService = {
  getBooks: function() {
    return AxiosClient.get("/books");
  },
  getBook: function(id) {
    return AxiosClient.get(`/books/${id}`);
  },
  putBook: function(book) {
    return AxiosClient.put(`/books/${book.id}`, book);
  },
};
