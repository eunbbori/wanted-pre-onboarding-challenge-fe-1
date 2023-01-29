import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxios from "../../api/axios";
import { TODO } from "../../utils/queryKeys";
import { TodoInfo } from "../../type/todoInfo";

const updateTodo = async (
  token: string,
  updatedTodo: TodoInfo,
): Promise<TodoInfo> => {
  return authAxios
    .put(`/todos/${updatedTodo.id}`, updatedTodo, {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data.data.data);
};

export default function useUpdateTodo(token: string) {
  const queryClient = useQueryClient();
  return useMutation(
    (updatedTodo: TodoInfo) => updateTodo(token, updatedTodo),
    {
      onSuccess: () => queryClient.invalidateQueries([TODO]),
    },
  );
}
