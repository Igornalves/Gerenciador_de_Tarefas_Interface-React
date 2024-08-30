import { useState } from "react";
import { Button, Conteiner, Input, Text } from "./style";
import { GoPlusCircle } from "react-icons/go";
import { InputAndButtonSubmitTaskProps } from "../../global/interfaces/Default";

export default function InputAndButtonSubmitTask({ onAddTask }: InputAndButtonSubmitTaskProps) {
    const [text, settext] = useState('')

    function handleForText(event: any) {
        settext(event.target.value)
    }

    function SubmitHandle() {
        if (text.trim() !== '') {
            onAddTask(text)
            settext(''); 
            console.log('Input cleared');
        }
    }

    return(
        <>
            <Input
                type="text"
                placeholder="Adicione uma nova tarefa"
                onChange={handleForText} 
            />
            <Conteiner>
                <Button
                    onClick={SubmitHandle}
                >
                    <Text>
                        Criar
                    </Text>
                    <GoPlusCircle
                        color="white"
                        size={18} />
                </Button>
            </Conteiner>
        </>
    );
}
