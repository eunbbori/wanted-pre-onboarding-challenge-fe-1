import { createApi } from "@reduxjs/toolkit/query/react";
import { Task } from "../../type/tasks";
import DB_DOMAIN_URL from "../../utils/DB_DOMAIN_URL";
import { authAxiosBaseQuery } from "./axiosBaseQuery";

export const taskApi = createApi({
  reducerPath: "taskApi",
  tagTypes: ["Task"],
  baseQuery: authAxiosBaseQuery({
    baseUrl: DB_DOMAIN_URL,
  }),
  endpoints: (builder) => ({
    //전체 todoList 불러옴
    getAllTaskList: builder.query<{ data: Task[] }, Record<string, never>>({
      query: () => {
        return {
          url: "/todos",
          method: "GET",
          params: {},
        };
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              "Task",
              ...result.data.map((task) => ({
                type: "Task" as const,
                id: task.id,
              })),
            ]
          : ["Task"],
    }),
    //id에 해당하는 todoDetail을 불러옴
    getDetailTask: builder.query<{ data: Task }, string | undefined>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "Task", id: arg }],
    }),
    //id에 해당하는 todo 수정
    updateTodoDetail: builder.mutation<Task, Task>({
      query: (updatedTask) => ({
        url: `/todos/${updatedTask.id}`,
        method: "PUT",
        data: updatedTask,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg.id }],
    }),
    //task 추가
    createTask: builder.mutation<Task, Task>({
      query: (newTask) => ({
        url: "/todos",
        method: "POST",
        data: newTask,
      }),
      invalidatesTags: ["Task"],
    }),
    //id에 해당하는 task 삭제
    deleteTask: builder.mutation<Task, string | undefined>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetAllTaskListQuery,
  useGetDetailTaskQuery,
  useCreateTaskMutation,
  useUpdateTodoDetailMutation,
  useDeleteTaskMutation,
} = taskApi;
