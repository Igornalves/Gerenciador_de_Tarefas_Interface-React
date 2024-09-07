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
import { api } from "../../service/api";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');
    const Navigation = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!username || !password) {
            window.alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await api.post('/login', { 
                username, 
                password 
            });
            window.alert('Login bem-sucedido!');
            Navigation('/');
            console.log('Login success:', response.data);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Login error:', error.response ? error.response.data : error.message);
                window.alert('Erro ao tentar fazer login. Verifique suas credenciais e tente novamente.');
            } else {
                window.alert('Erro desconhecido. Tente novamente mais tarde.');
                console.log('Login error:', error);            
            }
        }
    }

    function SubmitPageSignUp() {
        Navigation('/signup');
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
                <form onSubmit={handleSubmit}>
                    <DivFormsInput>
                        <TextInput1>
                            Username:
                        </TextInput1>
                        <InputUsername 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <TextInput2>
                            Password:
                        </TextInput2>
                        <InputPassword 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </DivFormsInput>
                    {error && <div style={{ color: 'red' }}>{error}</div>} 
                    <ButtonSubmit type="submit">
                        Login
                    </ButtonSubmit>
                </form> 
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