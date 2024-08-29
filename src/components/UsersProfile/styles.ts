import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const Conteiner = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-top: 20px;
`

export const Text = styled.text`

`

export const TextNome = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: ${defaultTheme.colors.principal.greenDark};

    :hover {
        color: ${defaultTheme.colors.principal.greenBase};
    }
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
