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
import { useState } from "react";
import InputAndButtonSubmitTask from "../InputAndButtonSubmitTask/intex";

export default function BoxTasks() {

    const [tasks, setTasks] = useState<{ id: string; Descricao: string; concluido: boolean }[]>([]);

    function addTask (taskDescription: string) {
        const newTask = {
            id: (tasks.length + 1).toString(),
            Descricao: taskDescription,
            concluido: false,
        };
        setTasks([...tasks, newTask]);
    };
    
    function toggleTaskCompletion (id: string) {
        setTasks((prevTasks) =>
        prevTasks.map((task) =>
            task.id === id ? { ...task, concluido: !task.concluido } : task
        )
        );
    };
    
    function deleteTask (id: string) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
    
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
                {tasks.length === 0 ? 
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
                : tasks.map((task) => (
                    <TasksItem
                      key={task.id}
                      id={task.id}
                      Descricao={task.Descricao}
                      concluido={task.concluido}
                      onToggle={() => toggleTaskCompletion(task.id)}
                      onDelete={() => deleteTask(task.id)}
                    />
                  ))
                }
            </DivTask>
        </BoxTask>
    )
}

