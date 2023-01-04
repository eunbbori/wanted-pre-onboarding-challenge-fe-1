import { BsFillPencilFill, BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import DetailTodo from "./components/DetailTodo";
import ListTodo from "./components/ListTodo";
import {
  Container,
  MainTodoContainer,
  TitleContainer,
  MainTitleContainer,
  SubTitleContainer,
  ListTodoContainer,
  DetailTodoContainer,
  Separator,
  MainAddButton,
  MainEditButton,
} from "./MainTodoStyle";

const MainTodo = () => {
  const navigate = useNavigate();
  const addHandler = () => {
    navigate("todo/create");
  };

  return (
    <Container>
      <MainTodoContainer>
        <TitleContainer>
          <MainTitleContainer>
            <p>ToDoList</p>
          </MainTitleContainer>
          <SubTitleContainer>
            <p>Check your Lists</p>
          </SubTitleContainer>
        </TitleContainer>
        <ListTodoContainer>
          <ListTodo />
          <MainAddButton
            width={"60px"}
            className={"addBtn"}
            type={"button"}
            text={<BsFillPlusCircleFill />}
            onClick={addHandler}
          />
        </ListTodoContainer>
        <Separator />
        <DetailTodoContainer>
          <DetailTodo />
          <MainEditButton
            width={"60px"}
            className={"editBtn"}
            type={"button"}
            text={<BsFillPencilFill />}
          />
        </DetailTodoContainer>
      </MainTodoContainer>
    </Container>
  );
};

export default MainTodo;
