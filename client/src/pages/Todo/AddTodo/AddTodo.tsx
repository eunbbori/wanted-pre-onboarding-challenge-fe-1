import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import AppButton from "../../../components/AppButton/AppButton";
import { TodoInfo } from "../../../type/todoInfo";
import { useNavigate } from "react-router-dom";
import DB_DOMAIN_URL from "../../../utils/DB_DOMAIN_URL";

import {
  Container,
  FormContainer,
  TitleContainer,
  Title,
  InputContainer,
  InputDiv,
  ErrorDiv,
  ButtonContainer,
} from "./AddTodoStyle";

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoInfo>();

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<TodoInfo> = async (data) => {
    const title = data.title;
    const content = data.content;
    const newData = { title, content };
    const token = localStorage.getItem("login-token");
    const res = await axios.post(`${DB_DOMAIN_URL}/todos`, newData, {
      headers: { Authorization: token },
    });
    // if (!localStorage.getItem("login-token")) {
    //   alert("로그인을 해주시기 바랍니다");
    //   navigate("/auth/login");
    // }
    try {
      if (res.status === 200) {
        navigate("/");
      } else {
        // alert("로그인을 해주시기 바랍니다");
        alert(res.data.details);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
        <TitleContainer>
          <Title>Add Task</Title>
        </TitleContainer>
        <InputContainer>
          <InputDiv position="center" height="title">
            <input
              id="title"
              {...register("title", { required: true })}
              type="text"
              placeholder="title"
            />
          </InputDiv>
          <ErrorDiv>
            {errors.title && errors.title.type === "required" && (
              <div>제목을 입력해주세요</div>
            )}
          </ErrorDiv>
          <InputDiv position="center" height="content">
            <textarea
              id="content"
              {...register("content", { required: true })}
              placeholder="content"
            />
          </InputDiv>
          <ErrorDiv>
            {errors.content && errors.content.type === "required" && (
              <div>내용을 입력해주세요</div>
            )}
          </ErrorDiv>
        </InputContainer>
        <ButtonContainer>
          <AppButton
            width={"200px"}
            className={"AddTodoBtn"}
            type={"submit"}
            text="ADD"
          />
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default AddTodo;
