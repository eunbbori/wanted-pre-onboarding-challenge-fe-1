import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
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
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [editMode, setEditMode] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const { id } = useParams();
  const token = localStorage.getItem("login-token");
  const editHandler = () => {
    setEditMode(true);
    setReadOnly(false);
  };
  const cancelAndSaveHandler = () => {
    setEditMode(false);
    setReadOnly(true);
  };

  useEffect(() => {
    axios
      .get(`${DB_DOMAIN_URL}/todos/${id}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        if (titleRef.current && contentRef.current) {
          titleRef.current.value = response.data.data.title;
          contentRef.current.value = response.data.data.content;
        }
      });
  }, [id, token]);

  return (
    <Container>
      <TitleContainer>
        <input
          type="text"
          name="title"
          defaultValue="title"
          readOnly={readOnly}
          ref={titleRef}
        />
      </TitleContainer>
      <ContentContainer>
        <textarea
          style={{ width: "100%", height: "100%" }}
          readOnly={readOnly}
          defaultValue="content"
          name="content"
          ref={contentRef}
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
          onClick={cancelAndSaveHandler}
        />
      )}
      {editMode && (
        <SaveButton
          width={"60px"}
          className={"editBtn"}
          type={"button"}
          text={"SAVE"}
          onClick={cancelAndSaveHandler}
        />
      )}
    </Container>
  );
};

export default DetailTodo;
