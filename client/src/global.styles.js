import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    padding: 20px 60px;
    font-family: "Open Sans", sans-serif;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  a {
    color: black;
    text-decoration: none;
  }
  
`;
