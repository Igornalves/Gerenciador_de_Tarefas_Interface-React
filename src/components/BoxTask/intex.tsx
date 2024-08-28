import { Tasks } from "../Tasks/intex";
import { 
    BoxTask,
    DivTextInfo,
    Text,
    TextNumber,
    DivText,
    TextNumberSucess,
    DivTask
} from "./style";

export function BoxTasks() {
    return(
        <BoxTask>
            <DivTextInfo>
                <DivText>
                    <Text>
                        Tarefas Criadas
                    </Text>
                    <TextNumber>
                        16
                    </TextNumber>
                </DivText>
                <DivText>
                    <Text>
                        Concluidas
                    </Text>
                    <TextNumberSucess>
                        8
                    </TextNumberSucess>
                </DivText>
            </DivTextInfo>
            <DivTask>

            </DivTask>
            <Tasks/>
            <Tasks/>
            <Tasks/>
        </BoxTask>
    )
}