import { useQuery } from "@tanstack/react-query";
import authAxios from "../../api/axios";
import { TODO } from "../../utils/queryKeys";
import { TodoInfo } from "./../../type/todoInfo";

const getTodos = async (token: string): Promise<TodoInfo[]> => {
  return authAxios
    .get("/todos", {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data.data.data);
};

export default function useGetAllTodo(token: string) {
  return useQuery<TodoInfo[], Error>([TODO], () => getTodos(token));
}
