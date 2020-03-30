import { createGlobalStyle } from "styled-components";

import { ThemeColor } from "./Variables";

const Global = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
    outline: transparent;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    color: inherit;
  }

  body{
    background-color: ${ThemeColor};
  }

  .ReactModal__Overlay {
    background-color: rgba(0,0,0,0.85) !important;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .ReactModal__Content{
    & > div {
      height: 330px !important;

      @media screen and (min-width: 768px){
        height: 430px !important;
        min-width: 767px !important;
      }
    }
  }
`;

export default Global;
