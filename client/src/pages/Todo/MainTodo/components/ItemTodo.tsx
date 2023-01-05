import axios from "axios";
import { useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import DB_DOMAIN_URL from "../../../../utils/DB_DOMAIN_URL";

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
  const token = localStorage.getItem("login-token");

  const viewHandler = () => {
    navigate(`/todo/${task.id}`);
  };

  const deleteHandler = () => {
    axios
      .delete(`${DB_DOMAIN_URL}/todos/${task.id}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        window.location.reload();
      });
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
