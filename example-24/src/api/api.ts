// src/api/api.ts
import axios from "axios";

// Axios 기본 설정
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // API 엔드포인트
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;