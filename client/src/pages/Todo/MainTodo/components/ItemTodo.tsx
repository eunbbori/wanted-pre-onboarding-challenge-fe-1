import { useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useDeleteTaskMutation } from "../../../../features/task/taskApi";

import {
  Container,
  CheckBoxDiv,
  CheckBox,
  TaskDiv,
  ViewBtnContainer,
  ViewBtn,
  DeleteBtnContainer,
  DeleteBtn,
} from "./ItemTodoStyle";

interface TodoTitleProps {
  task: any;
}

const ItemTodo: React.FC<TodoTitleProps> = ({ task }) => {
  const navigate = useNavigate();

  const [onDeleteTask, { isError: isErrorDeleteTask }] =
    useDeleteTaskMutation();

  useEffect(() => {
    if (isErrorDeleteTask) {
      alert("삭제 실패.");
    }
  }, [isErrorDeleteTask]);

  const viewHandler = () => {
    navigate(`/todo/${task.id}`);
  };

  const deleteHandler = () => {
    onDeleteTask(task.id);
  };

  return (
    <Container>
      <CheckBoxDiv>
        <CheckBox type="checkbox" />
      </CheckBoxDiv>
      <TaskDiv>
        <p>{task.title}</p>
      </TaskDiv>
      <ViewBtnContainer>
        <ViewBtn type="button" onClick={viewHandler}>
          <GiMagnifyingGlass />
        </ViewBtn>
      </ViewBtnContainer>
      <DeleteBtnContainer>
        <DeleteBtn type="button" onClick={deleteHandler}>
          <RiDeleteBin6Line />
        </DeleteBtn>
      </DeleteBtnContainer>
    </Container>
  );
};

export default ItemTodo;
