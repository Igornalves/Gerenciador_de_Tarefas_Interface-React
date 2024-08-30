import { 
    Conteiner,
    DivRetangulo,
    DivForms,
    ImgParaFundo,
    Titule,
    DivFormsInput,
    ButtonSubmit,
    TextInput1,
    InputUsername,
    TextInput2,
    InputPassword,
    Text,
    LinkRegister,
    DivLinkRegister
} from "./style";

import ImgBackGround from '../../assets/Background.png'
import { useNavigate } from "react-router-dom";

export default function SignIn() {

    const Navigation = useNavigate()

    function SubmitPageSignUp() {
        Navigation('/signup')
    }

    return(
        <Conteiner>
            <DivRetangulo> 
                <ImgParaFundo src={ImgBackGround} alt="img para fundo"/>
            </DivRetangulo>
            <DivForms> 
                <Titule>
                    Bem Vindo de Volta!
                </Titule>
                <DivFormsInput>
                    <TextInput1>
                        Username:
                    </TextInput1>
                    <InputUsername type="text"/>
                    <TextInput2>
                        Password:
                    </TextInput2>
                    <InputPassword type="password" />
                </DivFormsInput>
                <ButtonSubmit>
                    Login
                </ButtonSubmit>
                <DivLinkRegister>
                    <Text>
                        Não tem uma conta?
                    </Text>
                    <LinkRegister onClick={SubmitPageSignUp}>
                        Cadastre-se
                    </LinkRegister>
                </DivLinkRegister>
            </DivForms>
        </Conteiner>
    );
}