import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-3bk1.onrender.com",
})