import styled from "styled-components";
import Theme from "./../../styles/Theme";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Theme.color.color3};
  padding: 30px;
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Title = styled.p`
  color: ${Theme.color.color1};
  font-size: 2rem;
  font-weight: bold;
`;

export const FormContainer = styled.form`
  border-radius: 10px;
  width: 25vw;
  height: 60vh;
  background-color: white;
  margin: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NameDiv = styled.div`
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
export const NickNameDiv = styled.div`
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
export const EmailDiv = styled.div`
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
    background-color: #eeeeee !important;

    &:focus {
      outline: none;
    }
  }
`;
export const PasswordDiv = styled.div`
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
export const PasswordConfirmDiv = styled.div`
  width: 350px;
  height: 30px;
  border: 1px solid #eeeeee;
  background-color: #eeeeee;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

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
  text-align: center;
`;
