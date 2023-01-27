import styled from "styled-components";
import { AppButtonProps } from "./AppButton";
import Theme from "./../../styles/Theme";

export const Button = styled.button<AppButtonProps>`
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 20px;
  border: 1px solid #dbdbdb;
  color: white;
  background: ${Theme.color.color2};
  font-weight: bold;
  padding: 5px;

  &:hover {
    background-color: ${Theme.color.color3};
    cursor: pointer;
  }
`;
