import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const BoxTask = styled.div`
    width: 745px;
    height: 454px;
    margin-top: 18px;
    /* background-color: red;  */
`

export const DivTextInfo = styled.div`
    /* background-color: red; */
    display:flex;
    justify-content: center;
`

export const Text = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color: ${defaultTheme.colors.base.gray500};
    font-size: ${defaultTheme.fontSizes.sm};
`

export const TextNumber = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    background-color: ${defaultTheme.colors.principal.purpleLight};
    color: ${defaultTheme.colors.principal.purpleDark};
    padding: 5px;
    border-radius: 99px;
    margin-left: 8px;
`

export const DivInputeButton = styled.div`
    position: relative;
    top: -45px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivText = styled.div`

`

export const DivTask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`

export const TextMenssageErro = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: ${defaultTheme.fontSizes.xs};
    margin-top: 16px;
`

export const TextMessageSubtext = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
`
