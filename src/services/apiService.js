import axios from "axios";

export const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

export function getConfig() {
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}