import { BoxTasks } from "../../components/BoxTask/intex";
import ButtonSubmit from "../../components/ButtonSubmit/intex";
import InputTask from "../../components/InputTask/intex";
import { 
    Conteiner,
    DivCabecalho,
    TextHeading,
    DivInputeButton,
    DivTasksUsers
} from "./style";

export default function Home() {
    return(
        <Conteiner>
            <DivCabecalho>
                <TextHeading>
                    Gerenciador de tarefas
                </TextHeading>
                <DivInputeButton>
                    <InputTask/>
                    <ButtonSubmit/>
                </DivInputeButton>
            </DivCabecalho>
            <DivTasksUsers>
                <BoxTasks />
            </DivTasksUsers>
        </Conteiner>
    );
}