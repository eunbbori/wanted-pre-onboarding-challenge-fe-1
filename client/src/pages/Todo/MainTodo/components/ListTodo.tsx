import ItemTodo from "./ItemTodo";
import { Task } from "../../../../type/tasks";
import { useGetAllTaskListQuery } from "../../../../features/task/taskApi";

const ListTodo = () => {
  const { data } = useGetAllTaskListQuery({});

  return (
    <div>
      {data &&
        data.data.map((task: Task, idx) => <ItemTodo task={task} key={idx} />)}
    </div>
  );
};

export default ListTodo;
