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

export function TasksItem({ id, Descricao, concluido = false, onToggle, onDelete, Data }: typeText) {

   const [isChecked, setIsChecked] = useState(false)
   
   function handleCheckboxChange() {
      setIsChecked(!isChecked)
      const resultado = !concluido
      console.log(resultado)
      onToggle()
   }
   
   return(
    <Conteiner>
      <InputCheckBox
         id={id}
         type="checkbox"
         size={18}
         checked={isChecked}
         //Faz com que o estado do checkbox seja controlado pelo React, com o valor do checkbox sincronizado com o estado isChecked
         onChange={handleCheckboxChange}
      />
      <DivdoConteudo>
         <TextConteudo style={{
            // colocando a escolha para a mudanca de text quando clicado na caixa
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
               {Data}
            </TextData>
         </DivButtonAndData>
      </DivdoConteudo>
    </Conteiner>
   ) 
}
