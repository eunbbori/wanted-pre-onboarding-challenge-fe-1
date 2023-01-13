import axios from "axios";
import DB_DOMAIN_URL from "../../utils/DB_DOMAIN_URL";
import TOKEN from "../../utils/TOKEN";

const authAxios = axios.create({
  baseURL: DB_DOMAIN_URL,
  headers: {
    Authorization: TOKEN,
  },
});

export default authAxios;
