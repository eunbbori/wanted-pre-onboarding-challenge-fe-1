import axios, { AxiosRequestConfig } from "axios";
import { useContext } from "react";
import DB_DOMAIN_URL from "../utils/DB_DOMAIN_URL";
import TOKEN from "../utils/TOKEN";
import TokenContext from "../context/TokenContext";

const authAxios = axios.create({
  baseURL: DB_DOMAIN_URL,
});

//TODO interceptors
// authAxios.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     if (window.location.pathname.includes("/auth")) {
//       return config;
//     }
//     const { token } = useContext(TokenContext);
//     if (token) {
//       config.headers = {};
//       config.headers.Authorization = token;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default authAxios;
