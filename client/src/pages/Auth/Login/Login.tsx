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

  // const onSubmitHandler: (data) => {
  //   // const email = data.email;
  //   // const password = data.password;
  //   // const newData = { email, password };
  //   // axios
  //   //   .post(`${DB_DOMAIN_URL}users/login`, newData)
  //   //   .then((res) => {
  //   //     console.log(res.data);
  //   //     navigate("/");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error.data);
  //   //   });
  //   console.log(data);
  // };
  return (
    <Container>
      <FormContainer>
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
