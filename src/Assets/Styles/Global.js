import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
    outline: transparent;
    font-family: Arial, Helvetica, sans-serif;
  }

  body{
    background-color: #8140ff;
  }
`;

export default Global;
