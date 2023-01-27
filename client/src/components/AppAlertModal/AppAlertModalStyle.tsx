import styled from "styled-components";
import AppButton from "../AppButton/AppButton";
import Theme from "./../../styles/Theme";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10;
  display: flex;
`;
export const Container = styled.div`
  width: 20%;
  height: 30%;
  background-color: ${Theme.color.color1};
  box-shadow: 0 2px 3px 0 rgba(189, 210, 231, 0.15);
  margin: auto;
  border-radius: 10px;
`;
export const AlertText = styled.div`
  margin: 20px;
  font-weight: bold;
  font-size: 2rem;
  color: ${Theme.color.color4};
  text-align: center;
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  margin-top: 60px;
`;

export const ToLoginButton = styled(AppButton)`
  border: 1px solid #dbdbdb;
  color: ${Theme.color.color1};
  background: ${Theme.color.color3};
  font-weight: bold;
  font-family: "Galmuri14";
  font-size: 1.5rem;
  padding: 5px;
  margin-left: 65px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${Theme.color.color4};
  }
`;
