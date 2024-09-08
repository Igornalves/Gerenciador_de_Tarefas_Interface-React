import { 
   Conteiner,
   InputCheckBox,
   TextConteudo,
   Button,
   DivdoConteudo,
   TextData,
   DivButtonAndData
} from "./style";
import { RiDeleteBin6Line } from "react-icons/ri";
import { typeText } from "../../global/interfaces/Default";
import { useState } from "react";
import { api } from "../../service/api";

export function TasksItem({ id, Descricao, concluido, onToggle, onDelete, createdAt }: typeText) {

  const [isChecked, setIsChecked] = useState(concluido);

  async function handleCheckboxChange() {
     const newCheckedState = !isChecked;
     setIsChecked(newCheckedState);

     try {
        await api.patch(`/tasks/editar/${id}`, {
           concluida: newCheckedState
        });
        onToggle(newCheckedState);
     } catch (error) {
        console.error("Erro ao atualizar a tarefa:", error);
        setIsChecked(isChecked); 
     }
  }

  return(
   <Conteiner>
     <InputCheckBox
        id={id}
        type="checkbox"
        size={18}
        checked={isChecked}
        onChange={handleCheckboxChange}
     />
     <DivdoConteudo>
        <TextConteudo style={{
           textDecoration: isChecked ? 'line-through' : 'none'
        }}>
           {Descricao}
        </TextConteudo>
        <DivButtonAndData>
           <Button onClick={ onDelete }>
              <RiDeleteBin6Line 
                 size={18}
              />
           </Button>
           <TextData>
              {new Date(createdAt).toLocaleDateString()}
           </TextData>
        </DivButtonAndData>
     </DivdoConteudo>
   </Conteiner>
  ) 
}
