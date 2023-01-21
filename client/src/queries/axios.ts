import axios from "axios";
import DB_DOMAIN_URL from "../utils/DB_DOMAIN_URL";

const authAxios = axios.create({
  baseURL: DB_DOMAIN_URL,
});

//TODO interceptors

export default authAxios;
