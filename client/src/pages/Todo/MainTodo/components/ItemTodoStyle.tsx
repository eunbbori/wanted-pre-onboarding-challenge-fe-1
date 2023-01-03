import styled from "styled-components";
import Theme from "../../../../styles/Theme";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  font-family: "Secular One", sans-serif;
  border: 2px solid ${Theme.color.color3};
  border-radius: 10px;
  background-color: ${Theme.color.color3};
  padding: 5px;
  margin-top: 5px;
`;

export const CheckBoxDiv = styled.div`
  width: 2vw;
  place-self: center;
`;

export const CheckBox = styled.input`
  font-weight: bold;
  width: 20px;
  height: 20px;
  accent-color: ${Theme.color.color3};
`;

export const TaskDiv = styled.div`
  width: 25vw;
  font-weight: bold;
  font-size: 2rem;
  align-self: center;
`;

export const ViewBtnContainer = styled.div`
  margin-right: 10px;
  padding: 5px;
`;

export const ViewBtn = styled.button`
  font-weight: bold;
  background-color: ${Theme.color.color3};
  font-size: 2rem;
  border: 1px solid ${Theme.color.color3};
  cursor: pointer;
`;

export const DeleteBtnContainer = styled.div`
  padding: 5px;
`;

export const DeleteBtn = styled.button`
  font-weight: bold;
  background-color: ${Theme.color.color3};
  font-size: 2rem;
  border: 1px solid ${Theme.color.color3};
  cursor: pointer;
`;
