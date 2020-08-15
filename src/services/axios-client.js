import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: "https://spring-hpotter-bookstore.herokuapp.com/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
