import { useState } from "react";
import { Input } from "./style";

export default function InputTask() {
    const [text, settext] = useState('')

    function handleForText(event: any) {
        settext(event.target.value)
        console.log(text)
    }

    return(
        <Input
            type="text"
            placeholder="Adicione uma nova tarefa" 
            onChange={handleForText}
        /> 
    );
}