import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const ConteinerButton = styled.button`
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 5px;
    border: 0px;
    background-color: transparent;
`

export const TextNome = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: ${defaultTheme.colors.principal.greenDark};
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
