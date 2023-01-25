import { useContext, useState } from "react";
import { BsFillPlusCircleFill, BsPersonPlusFill } from "react-icons/bs";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import DetailTodo from "./components/DetailTodo";
import ListTodo from "./components/ListTodo";
import TokenContext from "../../../context/TokenContext";
import AppAlertDialog from "../../../components/AppDialog/AppAlertDialog";
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
  const [dialogOpen, setDialogOpen] = useState(false);
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
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const handleLogoutAgree = () => {
    clearToken();
    setDialogOpen(false);
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
            <AppAlertDialog
              AlertText={"로그아웃 하시겠습니까?"}
              AlertDescription={"로그인 페이지로 이동합니다."}
              DisagreeText={"취소"}
              AgreeText={"로그아웃"}
              openState={dialogOpen}
              handleClose={handleClose}
              handleAgree={handleLogoutAgree}
            />
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
