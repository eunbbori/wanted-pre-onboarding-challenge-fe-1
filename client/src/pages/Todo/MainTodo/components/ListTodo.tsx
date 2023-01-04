import axios from "axios";
import { useEffect, useState } from "react";
import ItemTodo from "./ItemTodo";
import DB_DOMAIN_URL from "../../../../utils/DB_DOMAIN_URL";

const ListTodo = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("login-token");
  useEffect(() => {
    axios
      .get(`${DB_DOMAIN_URL}/todos`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        setTasks(response.data.data);
      });
  }, [token]);

  return (
    <div>
      {tasks.map((task: any, idx) => (
        <ItemTodo task={task} key={idx} />
      ))}
    </div>
  );
};

export default ListTodo;
