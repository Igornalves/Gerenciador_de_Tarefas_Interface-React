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

interface ApiError {
    response?: {
        data: any;
    };
    message?: string;
}

function saveToken(token: string, expiresIn: number, userId: string) {
    const expirationTime = Date.now() + expiresIn * 1000; 
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpiration', expirationTime.toString()); 
    localStorage.setItem('userId', userId);
}

export default function SignIn() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        if (!username || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }
    
        try {
            const response = await api.post('/login', { 
                username, 
                password
            });
    
            const { token, expiresIn, userId } = response.data; // Suponha que `userId` é retornado pela API
            saveToken(token, expiresIn, userId); // Passa userId para a função saveToken
    
            window.alert('Login bem-sucedido!');
            navigate('/home');
    
            console.log('Login success:', response.data);
    
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const apiError = error as ApiError;
                setError(apiError.response ? apiError.response.data.error : apiError.message);
                console.log('Login error:', apiError.response ? apiError.response.data : apiError.message);
            } else {
                setError('Erro desconhecido. Tente novamente mais tarde.');
                console.log('Login error:', error);
            }
        }
    }       

    function handleSignUpClick() {
        navigate('/signup');
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
                    <LinkRegister onClick={handleSignUpClick}>
                        Cadastre-se
                    </LinkRegister>
                </DivLinkRegister>
            </DivForms>
        </Conteiner>
    );
}