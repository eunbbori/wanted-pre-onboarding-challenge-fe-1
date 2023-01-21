import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TodoInfo } from "../type/todoInfo";
import TOKEN from "../utils/TOKEN";
import { useNavigate } from "react-router-dom";
import { TODO } from "../utils/queryKeys";
import authAxios from "./axios";

//todo 추가
const fetchAddTodo = (newTodo: TodoInfo) => {
  return authAxios.post("/todos", newTodo, {
    headers: { Authorization: TOKEN },
  });
};

export const useAddTodoMutation = () => {
  const navigate = useNavigate();

  return useMutation(fetchAddTodo, {
    onSuccess: (todo) => {
      navigate(`/todo/${todo.data.data.id}`);
    },
    onError: () => {
      alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
    },
  });
};

//todoList 조회
const fetchTodoList = () => {
  return authAxios
    .get("/todos", { headers: { Authorization: TOKEN } })
    .then((res) => res.data);
};

export const useGetAllTodoQuery = () => {
  return useQuery({ queryKey: [TODO], queryFn: fetchTodoList });
};

//todoDetail 조회
const fetchTodoDetail = (taskId: string | undefined) => {
  if (taskId) {
    return authAxios
      .get(`/todos/${taskId}`, { headers: { Authorization: TOKEN } })
      .then((res) => res.data);
  } else {
    return false;
  }
};

export const useGetDetailTodoQuery = (taskId: string | undefined) => {
  return useQuery({
    queryKey: [TODO, taskId],
    queryFn: () => fetchTodoDetail(taskId),
  });
};

//todoDetail 수정
const fetchUpdateTodo = (taskId: string | undefined, updatedTodo: TodoInfo) => {
  return authAxios.put(`/todos/${taskId}`, updatedTodo, {
    headers: { Authorization: TOKEN },
  });
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({
      taskId,
      updatedTodo,
    }: {
      taskId: string | undefined;
      updatedTodo: TodoInfo;
    }) => fetchUpdateTodo(taskId!, updatedTodo),
    {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [TODO] }),
    },
  );
};

//todoDetail 삭제
const fetchDeleteTodo = (taskId: string | undefined) => {
  return authAxios
    .delete(`/todos/${taskId}`, { headers: { Authorization: TOKEN } })
    .then((res) => res.data);
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(fetchDeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TODO] });
      navigate("/");
    },
  });
};
