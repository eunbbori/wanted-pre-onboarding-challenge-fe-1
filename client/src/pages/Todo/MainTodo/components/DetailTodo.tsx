import { Container, TitleContainer, ContentContainer } from "./DetailTodoStyle";
import { useParams } from "react-router";
import { useState } from "react";
import DB_DOMAIN_URL from "../../../../utils/DB_DOMAIN_URL";
import axios from "axios";

const DetailTodo = () => {
  const [task, setTask] = useState({ title: "title", content: "content" });
  const { id } = useParams();
  const token = localStorage.getItem("login-token");

  axios
    .get(`${DB_DOMAIN_URL}/todos/${id}`, {
      headers: { Authorization: token },
    })
    .then((response) => {
      setTask(response.data.data);
    });
  return (
    <Container>
      <TitleContainer>
        <p>{task.title}</p>
      </TitleContainer>
      <ContentContainer>
        <p>{task.content}</p>
      </ContentContainer>
    </Container>
  );
};

export default DetailTodo;
