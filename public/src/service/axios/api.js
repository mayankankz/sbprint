import axios from "axios";
import { apiUrl } from "../../utils/constant";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
