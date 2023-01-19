import { useParams } from "react-router";
import { useState, useRef, useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { TodoInfo } from "./../../../../type/todoInfo";
import {
  useGetDetailTodoQuery,
  useUpdateTodoMutation,
} from "../../../../queries/todo";
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

  const editHandler = () => {
    setEditMode(true);
    setReadOnly(false);
    if (titleRef.current) {
      titleRef.current.focus();
    }
  };

  const cancelHandler = () => {
    setEditMode(false);
    setReadOnly(true);
    if (titleRef.current && contentRef.current && data) {
      titleRef.current.value = data.data.title;
      contentRef.current.value = data.data.content;
    }
  };

  const saveHandler = () => {
    setEditMode(false);
    setReadOnly(true);

    if (
      titleRef.current?.value === "" ||
      contentRef.current?.value === "" ||
      !id
    ) {
      return;
    }

    const updateTask: TodoInfo = {
      title: titleRef.current?.value || "",
      content: contentRef.current?.value || "",
      id: id,
    };
    updateTodoMutation.mutate({ taskId: id, updatedTodo: updateTask });
  };

  const { data } = useGetDetailTodoQuery(id);
  const updateTodoMutation = useUpdateTodoMutation();

  useEffect(() => {
    if (titleRef.current && contentRef.current && data) {
      titleRef.current.value = data.data.title;
      contentRef.current.value = data.data.content;
    }
  }, [data]);

  return (
    <Container>
      <TitleContainer>
        <input
          type="text"
          name="title"
          defaultValue="TITLE"
          readOnly={readOnly}
          ref={titleRef}
        />
      </TitleContainer>
      <ContentContainer>
        <textarea
          style={{ width: "100%", height: "100%" }}
          readOnly={readOnly}
          defaultValue="CONTENT"
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
          onClick={cancelHandler}
        />
      )}
      {editMode && (
        <SaveButton
          width={"60px"}
          className={"editBtn"}
          type={"button"}
          text={"SAVE"}
          onClick={saveHandler}
        />
      )}
    </Container>
  );
};

export default DetailTodo;
