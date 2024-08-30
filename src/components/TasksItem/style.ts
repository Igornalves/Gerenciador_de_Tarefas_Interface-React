import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const Conteiner = styled.div`
    background-color: ${defaultTheme.colors.base.gray400};
    width: 745px;
    height: 72px;
    border-radius: 8px;
    display: flex;
    margin-bottom: 15px;
`

export const InputCheckBox = styled.input`
    width: 16.25px;
    height: 16.25px;
    margin-top: 18px;
    margin-left: 18px;
    border: 2px solid;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    width: 34px;
    height: 34px;
    margin-right: 12px;
    margin-bottom: 15px;
    background-color: transparent;

    :hover{
        color: red;
    }
`

export const TextConteudo = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 14px;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
`

export const DivdoConteudo = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    justify-content: space-between;
    /* background-color: red; */
    margin-left: 12px;
`
