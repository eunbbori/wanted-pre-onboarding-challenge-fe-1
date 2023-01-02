// eslint-disable-next-line no-warning-comments
// TODO input 컴포넌트 분리 리팩토링

import axios from "axios";
import { useRef } from "react";
import AppButton from "../../../components/AppButton/AppButton";
import AppLabel from "../../../components/AppLabel/AppLabel";
import { Link, useNavigate } from "react-router-dom";
import DB_DOMAIN_URL from "../../../utils/DB_DOMAIN_URL";
import {
  Container,
  Title,
  TitleContainer,
  FormContainer,
  InputDiv,
  ButtonContainer,
  InputContainer,
} from "./LoginStyle";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const loginData = { email, password };
    axios
      .post(`${DB_DOMAIN_URL}users/login`, loginData)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("login-token", res.data.token);
        navigate("/");
      })
      .catch((error) => {
        alert("이메일 또는 비밀번호가 틀립니다");
        console.log(error.data);
      });
  };
  return (
    <Container>
      <FormContainer onSubmit={onSubmitHandler}>
        <TitleContainer>
          <Title>Login Here</Title>
        </TitleContainer>
        <InputContainer>
          <InputDiv>
            <AppLabel htmlFor="email" text="email" />
            <input id="email" type="email" ref={emailRef} />
          </InputDiv>
          <InputDiv>
            <AppLabel htmlFor="password" text="password" />
            <input id="password" type="password" ref={passwordRef} />
          </InputDiv>
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
