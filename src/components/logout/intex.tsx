import { 
    TextNome,
    DivText,
    ConteinerButton
} from "./styles";
import { defaultTheme } from "../../global/styles/default";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiration');
    navigate('/');
  }

  function ClickButton() {
    handleLogout();
  }

  return(
      <ConteinerButton onClick={ClickButton}>
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