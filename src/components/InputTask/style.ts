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
        border-color: ${defaultTheme.colors.principal.purpleBase};
    }
`