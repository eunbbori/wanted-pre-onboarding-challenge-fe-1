import ItemTodo from "./ItemTodo";
import { TodoInfo } from "./../../../../type/todoInfo";
import { useGetAllTodoQuery } from "../../../../queries/todo";
import { Key } from "react";
const ListTodo = () => {
  const { data } = useGetAllTodoQuery();

  return (
    <div>
      {data &&
        data.data.map((task: TodoInfo, idx: Key | null | undefined) => (
          <ItemTodo task={task} key={idx} />
        ))}
    </div>
  );
};

export default ListTodo;
