import styled from "styled-components";
import AppButton from "../../../../components/AppButton/AppButton";
import Theme from "../../../../styles/Theme";

export const Container = styled.div`
  padding: 20px;
  font-family: "Secular One", sans-serif;
`;

export const TitleContainer = styled.div`
  input {
    border: 0 solid black;
    background-color: transparent;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${Theme.color.color4};

    &:focus {
      outline: none;
    }
  }
`;
export const ContentContainer = styled.div`
  width: 42vw;
  height: 9vh;
  border: 3px solid ${Theme.color.color4};
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;

  textarea {
    border: 0 solid black;
    background-color: transparent;
    color: ${Theme.color.color4};
    font-size: 1.5rem;
    font-family: "Secular One", sans-serif;
    width: 200px;
    &:focus {
      outline: none;
    }
  }
`;

export const MainEditButton = styled(AppButton)`
  position: absolute;
  right: 26vw;
  bottom: 7vh;
  font-size: 3rem;
  height: 60px;
  font-family: "Secular One", sans-serif;
  border-radius: 50%;
  background: ${Theme.color.color2};
  line-height: inherit;
  align-self: end;
  margin-bottom: 10px;
  border: none;

  &:hover {
    background-color: ${Theme.color.color3};
  }
`;
