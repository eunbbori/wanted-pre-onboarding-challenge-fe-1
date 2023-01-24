import ItemTodo from "./ItemTodo";
import { TodoInfo } from "./../../../../type/todoInfo";
import { useGetAllTodoQuery } from "../../../../queries/todo";
import { Key, useContext } from "react";
import TokenContext from "./../../../../context/TokenContext";
import useGetAllTodo from "./../../../../hook/todo/useGetAllTodo";
const ListTodo = () => {
  // const { data } = useGetAllTodoQuery();

  const { token } = useContext(TokenContext);
  const { data } = useGetAllTodo(token!);

  return (
    <div>
      {data &&
        data.map((task: TodoInfo, idx: Key | null | undefined) => (
          <ItemTodo task={task} key={idx} />
        ))}
    </div>
  );
};

export default ListTodo;
