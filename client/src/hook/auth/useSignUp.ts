import { useMutation } from "@tanstack/react-query";
import authAxios from "../../api/axios";
import { SignupResponse, UserInfo } from "../../type/userInfo";

const Signup = async (newUser: UserInfo): Promise<SignupResponse> => {
  return authAxios.post("/users/create", newUser).then((data) => data.data);
};

export default function useSignup() {
  return useMutation(Signup);
}
