import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const Input = styled.input`
    width: 618px;
    height: 52px;
    border-radius: 8px;
    border: 3px solid;
    border-color: ${defaultTheme.colors.base.gray300};
    padding-left: 18px;

    :focus {
        border-color: ${defaultTheme.colors.principal.purpleDark};
    }
`
export const Conteiner = styled.div`
    margin-left: 8px;
    :hover {
        background-color: ${defaultTheme.colors.principal.purpleBase};
    }
`

export const Button = styled.button`
    width: 110px;
    height: 52px;
    border: 0px;
    border-radius: 8px;
    background-color: ${defaultTheme.colors.principal.purpleDark};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.text`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    margin-right: 7px;
    font-size: ${defaultTheme.fontSizes.md};
`
