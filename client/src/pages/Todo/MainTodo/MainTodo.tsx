import { useContext } from "react";
import { BsFillPlusCircleFill, BsPersonPlusFill } from "react-icons/bs";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import DetailTodo from "./components/DetailTodo";
import ListTodo from "./components/ListTodo";
import TokenContext from "../../../context/TokenContext";
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
  MainRegisterButton,
  MainLoginButton,
  MainLogOutButton,
} from "./MainTodoStyle";

const MainTodo = () => {
  const { token } = useContext(TokenContext);
  const { clearToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const addHandler = () => {
    if (!token) {
      alert("로그인을 해주시기 바랍니다.");
      return;
    }
    navigate("/todo/create");
  };

  const RegisterHandler = () => {
    navigate("/auth/register");
  };
  const LoginHandler = () => {
    navigate("/auth/login");
  };
  const LogoutHandler = () => {
    clearToken();
    navigate("/");
  };

  return (
    <Container>
      <MainTodoContainer>
        <TitleContainer>
          <MainTitleContainer>
            <p>ToDoList</p>
            {!token && (
              <MainLoginButton
                width={"60px"}
                className={"loginBtn"}
                type={"button"}
                text={<BiLogInCircle />}
                onClick={LoginHandler}
              />
            )}
            {!token && (
              <MainRegisterButton
                width={"60px"}
                className={"registerBtn"}
                type={"button"}
                text={<BsPersonPlusFill />}
                onClick={RegisterHandler}
              />
            )}
            {token && (
              <MainLogOutButton
                width={"60px"}
                className={"logoutBtn"}
                type={"button"}
                text={<BiLogOutCircle />}
                onClick={LogoutHandler}
              />
            )}
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
        </DetailTodoContainer>
      </MainTodoContainer>
    </Container>
  );
};

export default MainTodo;
