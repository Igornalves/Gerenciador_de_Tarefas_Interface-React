export interface typeText {
    id: string
    Descricao: String
    concluido?: boolean
    onToggle: () => void
    onDelete: () => void
    Data: String
}

export interface InputAndButtonSubmitTaskProps {
    onAddTask: (taskDescription: string) => void;
} 