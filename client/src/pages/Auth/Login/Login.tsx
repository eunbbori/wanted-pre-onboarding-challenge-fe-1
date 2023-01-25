import { useForm, SubmitHandler } from "react-hook-form";
import TokenContext from "../../../context/TokenContext";
import { useContext } from "react";
import useLogin from "../../../hook/auth/useLogin";
import usePreventLeave from "./../../../utils/hooks/usePreventLeave";
import { useNavigate } from "react-router-dom";
import AppButton from "../../../components/AppButton/AppButton";
import AppLabel from "../../../components/AppLabel/AppLabel";
import { UserInfo } from "../../../type/userInfo";
import EMAIL_VALIDATION from "../../../utils/EMAIL_VALIDATION";

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
  const { enablePrevent } = usePreventLeave();

  const navigate = useNavigate();
  const { saveToken } = useContext(TokenContext);
  const { mutate: login } = useLogin();

  const onSubmitHandler: SubmitHandler<UserInfo> = async (data) => {
    const email = data.email;
    const password = data.password;
    const loginData = { email, password };
    login(loginData, {
      onSuccess: (data) => {
        if (data.token) {
          console.log(data.token);
          saveToken(data.token);
          navigate("/");
          return;
        }
        alert("로그인에 실패했습니다. 로그인 정보를 다시 확인해주세요");
      },
    });
  };
  const toRegisterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/auth/register");
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
                pattern: EMAIL_VALIDATION,
              })}
              type="email"
              onChange={enablePrevent}
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
              onChange={enablePrevent}
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
            width={"180px"}
            className={"loginBtn"}
            type={"submit"}
            text="Login"
          />
          <AppButton
            width={"180px"}
            className={"toRegisterBtn"}
            type={"button"}
            text="Sign up"
            onClick={toRegisterHandler}
          />
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Login;
