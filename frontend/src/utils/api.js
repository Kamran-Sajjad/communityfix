// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
//   withCredentials: true
// });

// // Request interceptor to add auth token
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;










import axios from "axios";

// For Vite projects (likely what you're using since you have .jsx files)
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// For Create React App projects (if you're using that instead)
// const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

// Request interceptor to add auth token
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;