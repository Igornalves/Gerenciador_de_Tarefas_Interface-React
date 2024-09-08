import { 
    BoxTask,
    DivTextInfo,
    Text,
    TextNumber,
    DivText,
    DivTask,
    TextMenssageErro,
    TextMessageSubtext,
    DivInputeButton
} from "./style";
import { LuClipboardList } from "react-icons/lu";
import { defaultTheme } from "../../global/styles/default";
import { TasksItem } from "../TasksItem/intex";
import { useEffect, useState } from "react";
import InputAndButtonSubmitTask from "../InputAndButtonSubmitTask/intex";
import { api } from "../../service/api";

interface User {
    id: string;
    username: string;
}

interface Task {
    id: string;
    descricao: string;
    concluido: boolean;
    Data: string;
    createdAt: string;
    user: User;
}

export default function BoxTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [, setUserAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const expiration = localStorage.getItem('authTokenExpiration');
        const currentTime = Date.now();

        // Verificar expiração do token
        if (!token || !expiration || currentTime > Number(expiration)) {
            setError("Sessão expirada ou usuário não autenticado");
            setUserAuthenticated(false);
            return;
        }

        setUserAuthenticated(true); // Define o usuário como autenticado
        fetchTasks(token);
    }, []);

    function fetchTasks(token: string) {
        api.get('/tasks/listagem', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const { tasks } = response.data;

            if (Array.isArray(tasks)) {
                setTasks(tasks);
            } else {
                console.error("Estrutura de dados inválida: ", response.data);
                setError("Erro ao carregar tarefas");
            }
        })
        .catch(error => {
            console.error("Erro ao listar tarefas: ", error);
            setError("Erro ao carregar tarefas");
        });
    }

    function addTask(taskDescription: string) {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');
        
        console.log('Token:', token);
        console.log('User ID:', userId);
    
        if (!token || !userId) {
            setError("Usuário não autenticado");
            return;
        }
    
        api.post('/CriandoTasks', { 
            descricao: taskDescription,
            concluida: false,
            userId: userId
        }, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        .then(response => {
            const { createdTask } = response.data; 

            if (createdTask && createdTask.id) {
                setTasks(prevTasks => [...prevTasks, createdTask]);
            } else {
                console.error("Resposta da API inválida: ", response.data);
                setError("Erro ao criar tarefa");
            }
        })
        .catch(error => {
            console.error("Erro ao criar tarefa: ", error);
            setError("Erro ao criar tarefa");
        });
    }    

    function toggleTaskCompletion(id: string, newState: boolean) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, concluido: newState } : task
            )
        );

        api.patch(`/tasks/editar/${id}`, {
            concluida: newState
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}` // Autorização
            }
        })
        .then(response => {
            console.log("Tarefa atualizada com sucesso:", response.data);
        })
        .catch(error => {
            console.error("Erro ao atualizar a tarefa:", error);
            setError("Erro ao atualizar tarefa");
            // Reverter o estado local em caso de falha
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === id ? { ...task, concluido: !newState } : task
                )
            );
        });
    }

    function deleteTask(id: string) {
        const token = localStorage.getItem('authToken');
        if (!token) {
            setError("Usuário não autenticado");
            return;
        }

        api.delete(`/tasks/deletando/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
        })
        .catch(error => {
            console.error("Erro ao deletar tarefa: ", error);
            setError("Erro ao deletar tarefa");
        });
    }
    
    return(
        <BoxTask>
            <DivInputeButton>
                <InputAndButtonSubmitTask onAddTask={addTask}/> 
            </DivInputeButton>
            <DivTextInfo>
                <DivText>
                    <Text>
                        Tarefas Criadas
                    </Text>
                    <TextNumber>
                        {tasks.length}
                    </TextNumber>
                </DivText>
            </DivTextInfo>
            <DivTask>
            {error ? (
                    <TextMenssageErro>{error}</TextMenssageErro>
                ) : tasks.length === 0 ? (
                    <>
                        <LuClipboardList
                            size={65} 
                            color={defaultTheme.colors.principal.purpleLight}
                        />
                        <TextMenssageErro>
                            Você ainda não tem tarefas cadastradas
                        </TextMenssageErro>
                        <TextMessageSubtext>
                            Crie tarefas e organize seus itens a fazer
                        </TextMessageSubtext>
                    </>
                ) : (
                    tasks.map((task) => (
                        <TasksItem
                          key={task.id}
                          id={task.id}
                          Descricao={task.descricao}
                          concluido={task.concluido}
                          onToggle={(newState) => toggleTaskCompletion(task.id, newState)}
                          onDelete={() => deleteTask(task.id)}
                          createdAt={task.createdAt}
                        />
                    ))
                )}
            </DivTask>
        </BoxTask>
    )
}
