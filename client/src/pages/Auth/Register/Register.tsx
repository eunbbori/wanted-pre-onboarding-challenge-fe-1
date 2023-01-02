// eslint-disable-next-line no-warning-comments
// TODO input 컴포넌트 분리 리팩토링

import axios from "axios";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AppButton from "../../../components/AppButton/AppButton";
import AppLabel from "../../../components/AppLabel/AppLabel";
import { UserInfo } from "../../../type/userInfo";
import {
  Container,
  Title,
  TitleContainer,
  FormContainer,
  InputDiv,
  ErrorDiv,
  ButtonContainer,
  InputContainer,
} from "./RegisterStyle";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInfo>();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  const onSubmitHandler: SubmitHandler<UserInfo> = (data) => {
    const email = data.email;
    const password = data.password;
    const newData = { email, password };
    axios
      .post("http://localhost:8080/users/create", newData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
    console.log(data);
  };
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
        <TitleContainer>
          <Title>Register Here</Title>
        </TitleContainer>
        <InputContainer>
          <InputDiv position="center">
            <AppLabel htmlFor="name" text="Name" />
            <input
              id="name"
              {...register("name", {
                required: true,
                minLength: 1,
                maxLength: 20,
              })}
            />
          </InputDiv>
          <ErrorDiv>
            {errors.name && errors.name.type === "required" && (
              <div>이름을 입력해주세요</div>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <div>이름은 최소 1글자 입력해야합니다</div>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <div>이름은 최대 20글자만 입력할 수 있습니다</div>
            )}
          </ErrorDiv>
          <InputDiv position="center">
            <AppLabel htmlFor="nickname" text="Nickname" />
            <input
              id="nickname"
              {...register("nickname", {
                required: true,
                minLength: 1,
                maxLength: 10,
              })}
            />
          </InputDiv>
          <ErrorDiv>
            {errors.nickname && errors.nickname.type === "required" && (
              <div>닉네임을 입력해주세요</div>
            )}
            {errors.nickname && errors.nickname.type === "minLength" && (
              <div>닉네임은 최소 1글자 입력해야합니다</div>
            )}
            {errors.nickname && errors.nickname.type === "maxLength" && (
              <div>닉네임은 최대 20글자만 입력할 수 있습니다</div>
            )}
          </ErrorDiv>
          <InputDiv position="center">
            <AppLabel htmlFor="email" text="Email" />
            <input
              id="email"
              {...register("email", {
                required: true,
                pattern: /[^\s@]+@[^\s@]+\.[^\s@]+/,
              })}
              type="email"
            />
          </InputDiv>
          <ErrorDiv>
            {errors.email && errors.email.type === "required" && (
              <div>이메일을 입력해주세요</div>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <div>올바른 이메일 형식이 아닙니다</div>
            )}
          </ErrorDiv>
          <InputDiv position="center">
            <AppLabel htmlFor="password" text="Password" />
            <input
              id="password"
              {...register("password", { required: true, minLength: 8 })}
              type="password"
            />
          </InputDiv>
          <ErrorDiv>
            {errors.password && errors.password.type === "required" && (
              <div>비밀번호를 입력해주세요</div>
            )}
            {errors.password &&
              // eslint-disable-next-line no-warning-comments
              errors.password.type === "minLength" && ( // TODO 대소문자,특수문자 섞어서
                <div>비밀번호는 최소 8글자 입력해야합니다</div>
              )}
          </ErrorDiv>
          <InputDiv position="center">
            <AppLabel htmlFor="password_confirm" text="Confirm" />
            <input
              id="password_confirm"
              {...register("password_confirm", {
                required: true,
                validate: (value) => value === passwordRef.current,
              })}
              type="password"
            />
          </InputDiv>
          <ErrorDiv>
            {errors.password_confirm &&
              errors.password_confirm.type === "required" && (
                <div>비밀번호를 한번 더 입력해주세요</div>
              )}
            {errors.password_confirm &&
              errors.password_confirm.type === "validate" && (
                <div>설정한 비밀번호와 다릅니다</div>
              )}
          </ErrorDiv>
        </InputContainer>
        <ButtonContainer>
          <AppButton
            width={"200px"}
            className={"registerBtn"}
            type={"submit"}
            text="Register"
          />
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Register;
