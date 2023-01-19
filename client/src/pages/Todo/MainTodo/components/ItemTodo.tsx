import React, { useState, useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import AppAlertDialog from "../../../../components/AppDialog/AppAlertDialog";
import { useDeleteTodoMutation } from "../../../../queries/todo";

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

  const deleteTodoMutation = useDeleteTodoMutation();

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
    deleteTodoMutation.mutate(task.id);
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
