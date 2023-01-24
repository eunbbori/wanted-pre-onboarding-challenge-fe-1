import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxios from "../../queries/axios";
import { TODO } from "../../utils/queryKeys";
import { TodoInfo } from "../../type/todoInfo";
import { useNavigate } from "react-router";

const deleteTodo = async (token: string, taskId: string): Promise<TodoInfo> => {
  return authAxios
    .delete(`/todos/${taskId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data.data.data);
};

export default function useDeleteTodo(token: string) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((taskId: string) => deleteTodo(token, taskId), {
    onSuccess: () => {
      queryClient.invalidateQueries([TODO]);
      navigate("/");
    },
  });
}
