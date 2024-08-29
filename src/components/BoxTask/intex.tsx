import { useState } from "react";

import { 
    BoxTask,
    DivTextInfo,
    Text,
    TextNumber,
    DivText,
    TextNumberSucess,
    DivTask,
    TextMenssageErro,
    TextMessageSubtext
} from "./style";
import { LuClipboardList } from "react-icons/lu";
import { Tasks } from "../Tasks/intex";
import { defaultTheme } from "../../global/styles/default";


export function BoxTasks() {

    const [task] = useState([
        <Tasks
            Descricao={'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer'}
        />,
        <Tasks
            Descricao={'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer'}
        />,
        <Tasks
            Descricao={'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer'}
        />,
    ])

    return(
        <BoxTask>
            <DivTextInfo>
                <DivText>
                    <Text>
                        Tarefas Criadas
                    </Text>
                    <TextNumber>
                        {task.length}
                    </TextNumber>
                </DivText>
                <DivText>
                    <Text>
                        Concluidas
                    </Text>
                    <TextNumberSucess>
                        0
                    </TextNumberSucess>
                </DivText>
            </DivTextInfo>
            <DivTask>
                {task.length === 0 ? 
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
                : task}
            </DivTask>
        </BoxTask>
    )
}