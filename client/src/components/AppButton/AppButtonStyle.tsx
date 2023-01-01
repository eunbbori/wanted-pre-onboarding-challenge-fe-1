import styled from "styled-components";
import { AppButtonProps } from "./AppButton";

export const Button = styled.button<AppButtonProps>`
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  color: #333;
  background: #ff9a9e;
  font-weight: bold;

  &:hover {
    background-color: #fecfef;
  }
`;
