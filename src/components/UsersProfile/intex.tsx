import { FaCircleUser } from "react-icons/fa6";
import { 
    Conteiner,
    Text,
    TextNome,
    DivText
} from "./styles";
import { defaultTheme } from "../../global/styles/default";

export default function UsersProfile() {
    return(
        <Conteiner>
          <FaCircleUser 
            size={40}
            color={defaultTheme.colors.principal.greenDark}
          />
          <DivText>
            <Text>
                Olá,
            </Text>
            <TextNome>
                Igor Nascimento
            </TextNome>
          </DivText>
        </Conteiner>
    );
}