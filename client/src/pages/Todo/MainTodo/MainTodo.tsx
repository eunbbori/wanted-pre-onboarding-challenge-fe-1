import { GrAddCircle } from "react-icons/gr";
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
          ListTodo 컴포넌트 삽입
          <MainAppButton
            width={"60px"}
            className={"addBtn"}
            type={"button"}
            text={<GrAddCircle />}
          />
        </ListTodoContainer>
        <Separator />
        <DetailTodoContainer>DetailTodo 컴포넌트 삽입</DetailTodoContainer>
      </MainTodoContainer>
    </Container>
  );
};

export default MainTodo;
