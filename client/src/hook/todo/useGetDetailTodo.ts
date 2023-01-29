import { useQuery } from "@tanstack/react-query";
import authAxios from "../../api/axios";
import { TODO } from "../../utils/queryKeys";
import { TodoInfo } from "../../type/todoInfo";

const getTodoById = async (
  token: string,
  taskId: string,
): Promise<TodoInfo> => {
  return authAxios
    .get(`/todos/${taskId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data.data.data);
};

export default function useGetDetailTodo(token: string, taskId: string) {
  return useQuery<TodoInfo, Error>([TODO, taskId], () =>
    getTodoById(token, taskId),
  );
}
