import axios from "axios";
import { API_BASE_URL } from "@/lib/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

/* ---------- REQUEST INTERCEPTOR ---------- */
apiClient.interceptors.request.use((config) => {

  const token = localStorage.getItem("admin_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
