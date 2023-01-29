import { useMutation } from "@tanstack/react-query";
import authAxios from "../../api/axios";
import { LoginResponse, UserInfo } from "../../type/userInfo";

const Login = async (loginUser: UserInfo): Promise<LoginResponse> => {
  return authAxios.post("/users/login", loginUser).then((data) => data.data);
};

export default function useLogin() {
  return useMutation(Login);
}
