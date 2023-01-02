import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Secular One';
    font-style: normal;
    font-weight: 400;
    /* font-display: swap; */
    src: url(https://fonts.gstatic.com/s/secularone/v11/8QINdiTajsj_87rMuMdKyqDgOOhLLA.woff2) format('woff2');
    unicode-range:U+0041-005A, U+0061-007A, U+0030-0039; //영문, 숫자 적용 
  }

  @font-face {
    font-family: 'Galmuri14';
    src: url('https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css');
    unicode-range: U+AC00-U+D7A3; //한글 적용 
  }

  /* @font-face {
    font-family: Galmuri14;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Galmuri14 Regular'),
        url('../fonts/Galmuri14.woff2') format('woff2'),
        url('../fonts/Galmuri14.ttf') format('truetype');
} */

  body {
    box-sizing: border-box;
    background-color: ${Theme.color.color3};
  };
`;

export default GlobalStyle;
