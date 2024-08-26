import { GoPlusCircle } from "react-icons/go";
import { 
    Conteiner,
    Button,
    Text
} from "./style";


export default function ButtonSubmit() {
    return (
        <Conteiner>
            <Button>
                <Text>
                    Criar
                </Text>
                <GoPlusCircle 
                    color="white"
                    size={18}
                />
            </Button>
        </Conteiner>
    );
}