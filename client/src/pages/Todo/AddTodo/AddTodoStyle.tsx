import styled from "styled-components";
import Theme from "../../../styles/Theme";

interface InputDiv {
  position: string;
  height: string;
}

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Secular One", sans-serif;
  font-family: "Galmuri14";
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;
export const Title = styled.p`
  color: ${Theme.color.color4};
  font-size: 4rem;
  font-weight: bold;
`;

export const FormContainer = styled.form`
  border-radius: 10px;
  width: 30vw;
  height: 80vh;
  background-color: ${Theme.color.color2};
  margin: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputDiv = styled.div<InputDiv>`
  align-self: ${(props) => (props.position === "center" ? "center" : "left")};
  width: 350px;
  height: ${(props) => (props.height === "title" ? "40px" : "300px")};
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background-color: #eeeeee;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  input,
  textarea {
    margin-left: 10px;
    border: none;
    background-color: #eeeeee;
    font-weight: bold;
    font-size: 20px;
    font-family: "Secular One", sans-serif;
    color: ${Theme.color.color1};
    &:focus {
      outline: none;
    }
    ::placeholder {
      color: ${Theme.color.color2};
      font-size: 20px;
      font-weight: bold;
      font-family: "Secular One", sans-serif;
    }
  }

  textarea {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    resize: none;
  }
`;

export const ErrorDiv = styled.div`
  font-size: 1rem;
  color: #f03f35;
  font-weight: bold;
  margin-left: 110px;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  font-family: "Secular One", sans-serif;
  text-align: center;
  margin-top: 40px;
`;
