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

interface Task {
    id: string;
    Descricao: string;
    concluido: boolean;
    Data: string;
}

export default function BoxTasks() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get('/tasks/listagem')
        .then(response => {
            const { tasks } = response.data; // Extrair 'tasks' da resposta
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
    }, []);

    function addTask(taskDescription: string) {
        api.post('/CriandoTasks', {
            descricao: taskDescription,
            concluida: false,
            userId: "uuid-do-usuario" 
        })
        .then(response => {
            const { task } = response.data; // Extrair 'task' da resposta
            if (task && task.id) {
                setTasks(prevTasks => [...prevTasks, task]); 
            } else {
                console.error("Resposta da API inválida: ", response.data);
            }
        })
        .catch(error => {
            console.error("Erro ao criar tarefa: ", error);
            setError("Erro ao criar tarefa");
        });
    }

    function toggleTaskCompletion(id: string) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, concluido: !task.concluido } : task
            )
        );
    }

    function deleteTask(id: string) {
        api.delete(`/tasks/deletando/${id}`)
        .then(() => {
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
        })
        .catch(error => {
            console.error("Erro ao deletar tarefa: ", error);
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
                          Descricao={task.Descricao}
                          concluido={task.concluido}
                          onToggle={() => toggleTaskCompletion(task.id)}
                          onDelete={() => deleteTask(task.id)}
                          Data={task.Data}
                        />
                    ))
                )}
            </DivTask>
        </BoxTask>
    )
}

