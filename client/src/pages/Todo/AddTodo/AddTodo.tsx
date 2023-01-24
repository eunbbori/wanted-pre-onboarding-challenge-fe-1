import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TokenContext from "./../../../context/TokenContext";
import useAddTodo from "./../../../hook/todo/useAddTodo";
import AppButton from "../../../components/AppButton/AppButton";
import { TodoInfo } from "../../../type/todoInfo";
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

  const { token } = useContext(TokenContext);
  const { mutate: addTodo } = useAddTodo(token!);
  const onSubmitHandler: SubmitHandler<TodoInfo> = async (data) => {
    const title = data.title;
    const content = data.content;
    const newTask: TodoInfo = {
      title: title,
      content: content,
    };
    addTodo(newTask);
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
