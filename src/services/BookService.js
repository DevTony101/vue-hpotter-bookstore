import { apiClient } from "./axiosClient";

export default {
  getBooks: function() {
    return apiClient.get("/books");
  },
};
