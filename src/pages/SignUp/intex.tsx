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
    DivLinkRegister,
    InputNomeCompleto,
    InputEmail,
    InputConfirmPassword
} from "./style";
import { useNavigate } from "react-router-dom";

import imgParaFundo2 from '../../assets/Other 07.png'

export default function SignUp() {

    const Navigation = useNavigate()

    function SubmitPageSignUp() {
        Navigation('/signin')
    }

    return(
        <Conteiner>
            <DivRetangulo> 
                <ImgParaFundo src={imgParaFundo2} alt="img para fundo"/>
            </DivRetangulo>
            <DivForms> 
                <Titule>
                    Por favor preencha o formulário para se inscrever!
                </Titule>
                <DivFormsInput>
                    <TextInput1>
                        Nome Completo:
                    </TextInput1>
                    <InputNomeCompleto type="text"/>
                    <TextInput1>
                        Username:
                    </TextInput1>
                    <InputUsername type="text"/>
                    <TextInput1>
                        Email:
                    </TextInput1>
                    <InputEmail type="text"/>
                    <TextInput2>
                        Password:
                    </TextInput2>
                    <InputPassword type="password" />
                    <TextInput2>
                        Confirmar Password:
                    </TextInput2>
                    <InputConfirmPassword type="password" />
                </DivFormsInput>
                <ButtonSubmit>
                    Cadastre-se
                </ButtonSubmit>
                <DivLinkRegister>
                    <Text>
                        Sim, eu tenho uma conta?
                    </Text>
                    <LinkRegister onClick={SubmitPageSignUp}>
                        Conecte-se
                    </LinkRegister>
                </DivLinkRegister>
            </DivForms>
        </Conteiner>
    );
}