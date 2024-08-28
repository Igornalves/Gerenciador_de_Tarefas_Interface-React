import { RiDeleteBin6Line } from "react-icons/ri";
import { 
   Conteiner,
   InputCheckBox,
   TextConteudo,
   Button,
   DivdoConteudo
} from "./style";

export function Tasks() {
   return(
    <Conteiner>
      <InputCheckBox
         type="checkbox"
         size={18}
      />
      <DivdoConteudo>
         <TextConteudo>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
         </TextConteudo>
         <Button>
            <RiDeleteBin6Line 
               size={18}
            />
         </Button>
      </DivdoConteudo>
    </Conteiner>
   ) 
}
