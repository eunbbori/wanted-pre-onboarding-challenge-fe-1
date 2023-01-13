import ItemTodo from "./ItemTodo";
import { TodoInfo } from "./../../../../type/todoInfo";

import { useGetAllTaskListQuery } from "../../../../features/task/taskApi";

const ListTodo = () => {
  const { data } = useGetAllTaskListQuery({});

  return (
    <div>
      {data &&
        data.data.map((task: TodoInfo, idx) => (
          <ItemTodo task={task} key={idx} />
        ))}
    </div>
  );
};

export default ListTodo;
