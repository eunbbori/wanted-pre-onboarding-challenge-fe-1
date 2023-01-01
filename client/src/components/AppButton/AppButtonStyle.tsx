import styled from "styled-components";
import { AppButtonProps } from "./AppButton";
import Theme from "./../../styles/Theme";

export const Button = styled.button<AppButtonProps>`
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  color: #333;
  background: ${Theme.color.color2};
  font-weight: bold;

  &:hover {
    background-color: ${Theme.color.color3};
  }
`;
