import styled from "styled-components";
import Theme from "../../../styles/Theme";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  font-family: "Secular One", sans-serif;
  font-family: "Galmuri14";
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 40px;
`;

export const Title = styled.p`
  color: ${Theme.color.color1};
  font-size: 2rem;
  font-weight: bold;
`;

export const FormContainer = styled.form`
  border-radius: 10px;
  width: 25vw;
  height: 50vh;
  background-color: white;
  margin: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputDiv = styled.div`
  align-self: center;
  width: 350px;
  height: 30px;
  border: 1px solid #eeeeee;
  background-color: #eeeeee;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  input {
    margin-left: 10px;
    border: none;
    background-color: #eeeeee;

    &:focus {
      outline: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  font-family: "Secular One", sans-serif;
  text-align: center;
  margin-top: 50px;
`;
