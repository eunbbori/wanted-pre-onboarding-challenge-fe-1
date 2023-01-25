import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { useNavigate } from "react-router-dom";
import { AxiosRequestConfig } from "axios";
import authAxios from "../auth/authAxios";

export const authAxiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    const result = await authAxios({
      url: baseUrl + url,
      method,
      data,
      params,
    });

    if (result.status === 400) {
      const navigate = useNavigate();
      navigate("/auth/login");
    }

    return { data: result.data };
  };
