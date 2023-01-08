import { useForm, SubmitHandler } from "react-hook-form";
import AppButton from "../../../components/AppButton/AppButton";
import { TodoInfo } from "../../../type/todoInfo";
import { useNavigate } from "react-router-dom";

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
import { useCreateTaskMutation } from "../../../features/task/taskApi";
import { Task } from "../../../type/tasks";

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoInfo>();

  const [createTask] = useCreateTaskMutation();

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<TodoInfo> = async (data) => {
    const title = data.title;
    const content = data.content;
    const newTask: Task = {
      title: title,
      content: content,
    };

    createTask(newTask)
      .then(() => {
        navigate("/todo");
      })
      .catch(() => {
        alert("에러가 발생하였습니다. 관리자에게 문의해주세요.");
      });
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
