import styled from "styled-components";
import { defaultTheme } from "../../global/styles/default";

export const Conteiner = styled.div`
    width: 100%;
    height: 720px;
    display: flex;
    flex-direction: row;
    background-color: ${defaultTheme.colors.base.gray400};
`

export const DivRetangulo = styled.div`
    width: 438px;
    height: 100%;
    background-color: ${defaultTheme.colors.principal.purpleDark};
`

export const DivForms = styled.form`
    /* background-color: red; */
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 200px;
    margin-top: 80px;
`

export const ImgParaFundo = styled.img`
    /* width: 600px; */
    height: 570px;
    position: relative;
    top: 70px;
    right: -100px;
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
    margin-top: 32px;
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

export const InputNomeCompleto = styled.input`
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

export const InputEmail = styled.input`
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
    margin-bottom: 12px;
    background-color: transparent;
    border-color: ${defaultTheme.colors.principal.purpleDark};

    :focus {
        border-color: ${defaultTheme.colors.principal.purpleDark};
    }
`

export const InputConfirmPassword = styled.input`
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

export const Text = styled.text`
    margin-right: 5px;
`

export const LinkRegister = styled.a`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    cursor: pointer;
`

export const DivLinkRegister = styled.div`
    margin-top: 30px;
`
