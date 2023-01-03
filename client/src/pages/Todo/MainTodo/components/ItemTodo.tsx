import { GiMagnifyingGlass } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
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
  title: string;
}

const ItemTodo: React.FC<TodoTitleProps> = ({ title }) => {
  return (
    <Container>
      <CheckBoxDiv>
        <CheckBox type="checkbox" />
      </CheckBoxDiv>
      <TaskDiv>
        <p>{title}</p>
      </TaskDiv>
      <ViewBtnContainer>
        <ViewBtn type="button">
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
