import { GiMagnifyingGlass } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";

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

  const viewHandler = () => {
    navigate(`/todo/${task.id}`);
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
        <DeleteBtn type="button">
          <RiDeleteBin6Line />
        </DeleteBtn>
      </DeleteBtnContainer>
    </Container>
  );
};

export default ItemTodo;
