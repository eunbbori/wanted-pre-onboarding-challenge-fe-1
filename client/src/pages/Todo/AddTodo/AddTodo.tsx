import { useForm, SubmitHandler } from "react-hook-form";
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
    watch,
    formState: { errors },
  } = useForm<TodoInfo>();

  const onSubmitHandler: SubmitHandler<TodoInfo> = async (data) => {
    const title = data.title;
    const content = data.content;
    const newData = { title, content };
    console.log(newData);
    // const res = await axios.post(`${DB_DOMAIN_URL}/users/create`, newData);
    // try {
    //   if (res.status === 200) {
    //     navigate("/login");
    //   } else {
    //     alert(res.data.details);
    //   }
    // } catch (error) {
    //   alert(error);
    // }
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
