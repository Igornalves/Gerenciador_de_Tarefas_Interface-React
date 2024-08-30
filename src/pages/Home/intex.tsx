import BoxTasks from "../../components/BoxTask/intex";
import Logout from "../../components/logout/intex";
import { 
    Conteiner,
    DivCabecalho,
    TextHeading,
    DivTasksUsers
} from "./style";

export default function Home() {
    return(
        <Conteiner>
            <DivCabecalho>
                <TextHeading>
                    Gerenciador de tarefas
                </TextHeading>
                <Logout/>
            </DivCabecalho>
            <DivTasksUsers>
                <BoxTasks />
            </DivTasksUsers>
        </Conteiner>
    );
}