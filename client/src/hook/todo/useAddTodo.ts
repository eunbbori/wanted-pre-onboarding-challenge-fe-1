import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxios from "../../api/axios";
import { TODO } from "../../utils/queryKeys";
import { TodoInfo } from "../../type/todoInfo";
import { useNavigate } from "react-router-dom";

const addTodo = async (token: string, newTodo: TodoInfo): Promise<TodoInfo> => {
  return authAxios
    .post("/todos", newTodo, {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => data.data.data);
};

export default function useAddTodo(token: string) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((newTodo: TodoInfo) => addTodo(token, newTodo), {
    onSuccess: (todo) => {
      queryClient.invalidateQueries([TODO]);
      navigate(`/todo/${todo.id}`);
    },
  });
}
