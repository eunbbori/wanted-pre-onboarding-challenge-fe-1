import styled from "styled-components";
import Theme from "../../../../styles/Theme";

export const Container = styled.div`
  padding: 20px;
  font-family: "Secular One", sans-serif;
`;

export const TitleContainer = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${Theme.color.color4};
`;
export const ContentContainer = styled.div`
  width: 42vw;
  height: 9vh;
  border: 3px solid ${Theme.color.color4};
  border-radius: 10px;
  color: ${Theme.color.color4};
  padding: 20px;
  font-size: 1.5rem;
  margin-top: 10px;
`;
