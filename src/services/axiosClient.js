import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000", // This is the base url that all the api calls are going to use
  withCredentials: false,
  headers: {
    // Authentication and Configuration
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000, //ms which is 10seconds
});
