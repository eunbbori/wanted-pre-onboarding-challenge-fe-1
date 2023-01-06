import { useParams } from "react-router";
import { useState, useEffect } from "react";
import DB_DOMAIN_URL from "../../../../utils/DB_DOMAIN_URL";
import axios from "axios";
import { BsFillPencilFill } from "react-icons/bs";
import {
  Container,
  TitleContainer,
  ContentContainer,
  MainEditButton,
  CancelButton,
  SaveButton,
} from "./DetailTodoStyle";

const DetailTodo = () => {
  const [task, setTask] = useState({ title: "title", content: "content" });
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem("login-token");
  const editHandler = () => {
    setEditMode(true);
  };
  useEffect(() => {
    axios
      .get(`${DB_DOMAIN_URL}/todos/${id}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        setTask(response.data.data);
      });
  }, [id, token]);

  return (
    <Container>
      <TitleContainer>
        <input type="text" value={task.title} readOnly />
      </TitleContainer>
      <ContentContainer>
        <textarea
          style={{ width: "100%", height: "100%" }}
          readOnly
          value={task.content}
        />
      </ContentContainer>
      {!editMode && (
        <MainEditButton
          width={"60px"}
          className={"editBtn"}
          type={"button"}
          text={<BsFillPencilFill />}
          onClick={editHandler}
        />
      )}
      {editMode && (
        <CancelButton
          width={"60px"}
          className={"editBtn"}
          type={"button"}
          text={"CANCEL"}
        />
      )}
      {editMode && (
        <SaveButton
          width={"60px"}
          className={"editBtn"}
          type={"button"}
          text={"SAVE"}
        />
      )}
    </Container>
  );
};

export default DetailTodo;
