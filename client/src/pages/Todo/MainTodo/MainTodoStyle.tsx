import styled from "styled-components";
import AppButton from "../../../components/AppButton/AppButton";
import Theme from "../../../styles/Theme";

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
export const MainTodoContainer = styled.div`
  border-radius: 10px;
  width: 50vw;
  height: 90vh;
  background-color: ${Theme.color.color2};
  margin: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

export const MainTitleContainer = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${Theme.color.color1};
  p {
    color: ${Theme.color.color4};
    font-size: 5rem;
    font-weight: bold;
  }
`;

export const SubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 10px;
  p {
    color: ${Theme.color.color4};
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const ListTodoContainer = styled.div`
  width: 40vw;
  height: 40vh;
  border-radius: 10px;
  margin: auto;
  background-color: ${Theme.color.color4};
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  overflow: auto;
`;
export const DetailTodoContainer = styled.div``;

export const Separator = styled.hr`
  margin: 0;
  padding: 0;
  border: 0;
  border: 1px solid ${Theme.color.color4};
`;
// export const MainListContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

export const MainAddButton = styled(AppButton)`
  position: absolute;
  right: 26vw;
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
