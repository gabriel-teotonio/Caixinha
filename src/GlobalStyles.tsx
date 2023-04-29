import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background-color: ${theme.colors.whiteBlue};
        font-family: 'Montserrat', sans-serif;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    ul{
        list-style: none;
    }

    button{
        border: 0;
        cursor: pointer;
        background-color: transparent;
    }
`