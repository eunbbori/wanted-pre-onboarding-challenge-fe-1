import axios from "axios";
import DB_DOMAIN_URL from "../../utils/DB_DOMAIN_URL";

const token = localStorage.getItem("login-token");

const authAxios = axios.create({
  baseURL: DB_DOMAIN_URL,
  headers: {
    Authorization: token,
  },
});

export default authAxios;
