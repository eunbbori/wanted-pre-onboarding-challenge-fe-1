// eslint-disable-next-line no-warning-comments
// TODO input 컴포넌트 분리 리팩토링

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import AppButton from "../../../components/AppButton/AppButton";
import AppLabel from "../../../components/AppLabel/AppLabel";
import { Link, useNavigate } from "react-router-dom";
import DB_DOMAIN_URL from "../../../utils/DB_DOMAIN_URL";
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
} from "./LoginStyle";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  const navigate = useNavigate();

  if (localStorage.getItem("login-token")) {
    navigate("/");
  }

  const onSubmitHandler: SubmitHandler<UserInfo> = async (data) => {
    const email = data.email;
    const password = data.password;
    const loginData = { email, password };
    try {
      const res = await axios.post(`${DB_DOMAIN_URL}/users/login`, loginData);
      if (res.status === 200) {
        localStorage.setItem("login-token", res.data.token);
        navigate("/");
      } else {
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
          <Title>Login Here</Title>
        </TitleContainer>
        <InputContainer>
          <InputDiv position="center">
            <AppLabel htmlFor="email" text="email" />
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
            <AppLabel htmlFor="password" text="password" />
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
        </InputContainer>
        <ButtonContainer>
          <AppButton
            width={"200px"}
            className={"loginBtn"}
            type={"submit"}
            text="Login"
          />
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Login;
