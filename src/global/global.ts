import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./styles/default";

export const GlobalDefault = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${defaultTheme.colors.base.gray100};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`