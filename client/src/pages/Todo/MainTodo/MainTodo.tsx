import { GrAddCircle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
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
  MainAppButton,
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
          <MainAppButton
            width={"60px"}
            className={"addBtn"}
            type={"button"}
            text={<GrAddCircle />}
            onClick={addHandler}
          />
        </ListTodoContainer>
        <Separator />
        <DetailTodoContainer>DetailTodo 컴포넌트 삽입</DetailTodoContainer>
      </MainTodoContainer>
    </Container>
  );
};

export default MainTodo;
