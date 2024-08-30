import { 
    TextNome,
    DivText,
    ConteinerButton
} from "./styles";
import { defaultTheme } from "../../global/styles/default";
import { BiLogOut } from "react-icons/bi";

export default function Logout() {
    return(
        <ConteinerButton>
          <BiLogOut 
            size={40}
            color={defaultTheme.colors.principal.greenDark}
          />
          <DivText>
            <TextNome>
              Logout
            </TextNome>
          </DivText>
        </ConteinerButton>
    );
}