import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const Conteiner = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: row;
    background-color: ${defaultTheme.colors.base.gray400};

    /* @media (min-width: 1280px) {
        height: 750px;
    }

    @media (min-width: 884px) {
        height: 1010px;
        align-items: center;
    }

    @media (min-width: 820px) {
        height: 1140px;
        align-items: center;
    }*/
`

export const DivRetangulo = styled.div`
    width: 438px;
    height: 100%;
    background-color: ${defaultTheme.colors.principal.purpleDark};

    /* @media (min-width: 884px) {
        width: 100%;
        height: 450px;
        position: absolute;
        top: 1px;
    }

    @media (min-width: 820px) {
        width: 100%;
        height: 550px;
        position: absolute;
        top: 1px;
    } */
`

export const DivForms = styled.div`
    /* background-color: red; */
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 200px;
    margin-top: 180px;

    /* @media (min-width: 820px) {
        position: absolute;
        left: -220px;
        top: 480px;
    }
    
    @media (min-width: 884px) {
        position: absolute;
        left: -210px;
        top: 420px;
    } */

`

export const ImgParaFundo = styled.img`
    /* width: 600px; */
    height: 570px;
    position: relative;
    top: 40px;
    right: -140px;

    /* @media (min-width: 884px) {
        height: 500px;
        position: relative;
        top: 20px;
        right: -180px;
    }

    @media (min-width: 820px) {
        height: 500px;
        position: relative;
        top: 20px;
        right: -180px;
    } */
`

export const Titule = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 20px;
`

export const DivFormsInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`

export const ButtonSubmit = styled.button`
    width: 400px;
    height: 44px;
    border-radius: 99px;
    margin-top: 42px;
    background-color: ${defaultTheme.colors.principal.purpleDark};
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    border: 0px;
`

export const TextInput1 = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    margin-bottom: 11px;
`

export const InputUsername = styled.input`
    width: 400px;
    height: 34px;
    border-radius: 99px;
    padding-left: 15px;
    margin-bottom: 12px;
    background-color: transparent;
    border-color: ${defaultTheme.colors.principal.purpleDark};

    :focus {
        border-color: ${defaultTheme.colors.principal.purpleDark};
    }
`
    
export const TextInput2 = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    margin-bottom: 11px;
`

export const InputPassword = styled.input`
    width: 400px;
    height: 34px;
    border-radius: 99px;
    padding-left: 15px;
    background-color: transparent;
    border-color: ${defaultTheme.colors.principal.purpleDark};

    :focus {
        border-color: ${defaultTheme.colors.principal.purpleDark};
    }
`

export const Text = styled.span`
    margin-right: 5px;
`

export const LinkRegister = styled.a`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    cursor: pointer;
`

export const DivLinkRegister = styled.div`
    margin-top: 54px;
`
