import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const Conteiner = styled.div`

`

export const DivCabecalho = styled.div`
    height: 200px;
    background-color: ${defaultTheme.colors.base.gray300};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TextHeading = styled.h1`
    color: ${defaultTheme.colors.principal.greenDark};
    margin-top: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 25px;
`

export const DivTasksUsers = styled.div`
    width: 100%;
    height: 824px;
    display: flex;
    justify-content: center;
    /* background-color: red; */
`
