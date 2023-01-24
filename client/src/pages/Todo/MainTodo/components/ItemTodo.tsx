import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import TokenContext from "./../../../../context/TokenContext";
import useDeleteTodo from "./../../../../hook/todo/useDeleteTodo";
import AppAlertDialog from "../../../../components/AppDialog/AppAlertDialog";
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
  task: any;
}

const ItemTodo: React.FC<TodoTitleProps> = ({ task }) => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const { token } = useContext(TokenContext);
  const { mutate: deleteTodo } = useDeleteTodo(token!);
  const viewHandler = () => {
    navigate(`/todo/${task.id}`);
  };

  const deleteHandler = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleDeleteAgree = () => {
    deleteTodo(task.id);
    setDialogOpen(false);
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
        <AppAlertDialog
          AlertText={"선택한 항목을 삭제하시겠습니까?"}
          AlertDescription={"한 번 삭제된 항목은 되돌릴 수 없습니다."}
          DisagreeText={"취소"}
          AgreeText={"삭제"}
          openState={dialogOpen}
          handleClose={handleClose}
          handleAgree={handleDeleteAgree}
        />
      </DeleteBtnContainer>
    </Container>
  );
};

export default ItemTodo;
