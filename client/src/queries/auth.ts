import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { AuthResType, UserInfo } from "../type/userInfo";
import { TODO } from "../utils/queryKeys";
import TOKEN from "../utils/TOKEN";
import authAxios from "./axios";

//회원가입
const fetchRegistered = (newUser: UserInfo) => {
  return authAxios.post("/users/create", newUser, {
    headers: { Authorization: TOKEN },
  });
};

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation(fetchRegistered, {
    onSuccess: () => {
      navigate("/auth/login");
    },
    onError: () => {
      alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
    },
  });
};

//로그인
const fetchLogin = (loginUser: UserInfo) => {
  return authAxios.post("/users/login", loginUser, {
    headers: { Authorization: TOKEN },
  });
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(fetchLogin, {
    onSuccess: (tokenData: AxiosResponse<AuthResType>) => {
      localStorage.setItem("login-token", tokenData.data.token);
      navigate("/");
      // queryClient.invalidateQueries({ queryKey: [TODO] });
    },
    onError: () => {
      alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
    },
  });
};
