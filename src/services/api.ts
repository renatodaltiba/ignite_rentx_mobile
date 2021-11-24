import axios from "axios";

export const api = axios.create({
  baseURL: "http://hostrenato.ddns.net:3333",
});
