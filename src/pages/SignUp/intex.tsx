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
import { api } from "../../service/api";
import { useState } from "react";

interface User {
    nome: string;
    username: string;
    email: string;
    password: string;
}

export default function SignUp() {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState<User>({
        nome: '',
        username: '',
        email: '',
        password: '',
    });

    const [confirmPassword, setConfirmPassword] = useState(''); 
    // const [ setErrorMessage] = useState('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            password: e.target.value 
        });
    }

    function handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value); 
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const { nome, username, email, password } = formData;

        if (!nome || !username || !email || password === undefined || confirmPassword === undefined) {
            window.alert('Todos os campos devem ser preenchidos');
            return;
        }

        if (password !== confirmPassword) {
            window.alert('As senhas não coincidem');
            return;
        }

        try {
            const response = await api.post('/CriandoUser', formData);
            console.log("Usuário criado com sucesso: ", response.data);

            window.alert('Usuário cadastrado com sucesso!');

            navigate('/');
        } catch (error) {
            console.error("Erro ao criar usuário: ", error);
            window.alert('Erro ao tentar cadastrar. Tente novamente mais tarde.');
        }
    }

    return(
        <Conteiner>
            <DivRetangulo> 
                <ImgParaFundo src={imgParaFundo2} alt="img para fundo"/>
            </DivRetangulo>
            <DivForms onSubmit={handleSubmit}> 
                <Titule>
                    Por favor preencha o formulário para se inscrever!
                </Titule>
                <DivFormsInput>
                    <TextInput1>
                        Nome Completo:
                    </TextInput1>
                    <InputNomeCompleto 
                        type="text" 
                        name="nome" 
                        value={formData.nome} 
                        onChange={handleInputChange}
                    />
                    <TextInput1>
                        Username:
                    </TextInput1>
                    <InputUsername 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleInputChange}
                    />
                    <TextInput1>
                        Email:
                    </TextInput1>
                    <InputEmail 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                    />
                    <TextInput2>
                        Password:
                    </TextInput2>
                    <InputPassword 
                        type="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handlePasswordChange}  
                    />
                    <TextInput2>
                        Confirmar Password:
                    </TextInput2>
                    <InputConfirmPassword 
                        type="password" 
                        value={confirmPassword} 
                        onChange={handleConfirmPasswordChange} 
                    />
                </DivFormsInput>
                <ButtonSubmit type="submit">
                    Cadastre-se
                </ButtonSubmit>
                <DivLinkRegister>
                    <Text>
                        Sim, eu tenho uma conta?
                    </Text>
                    <LinkRegister onClick={() => navigate('/')}>
                        Conecte-se
                    </LinkRegister>
                </DivLinkRegister>
            </DivForms>
        </Conteiner>
    );
}