import AppButton from "../AppButton/AppButton";
import { useNavigate } from "react-router-dom";
import {
  BackgroundContainer,
  Container,
  AlertText,
  ButtonContainer,
  ToLoginButton,
} from "./AppAlertModalStyle";

const AppAlertModal = () => {
  const navigate = useNavigate();
  const toLoginHandler = () => {
    navigate("/auth/login");
  };

  return (
    <BackgroundContainer>
      <Container>
        <AlertText>
          로그인 후에 <br />
          이용가능합니다.
        </AlertText>
        <ButtonContainer>
          <ToLoginButton
            width={"250px"}
            className={"toLoginBtn"}
            type={"button"}
            text="로그인 하러가기"
            onClick={toLoginHandler}
          ></ToLoginButton>
        </ButtonContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default AppAlertModal;
