export interface typeText {
    id: string;
    Descricao: string;
    concluido?: boolean;
    onToggle: (newState: boolean) => void; // Passa o novo estado como argumento
    onDelete: () => void;
    createdAt: string;
}

export interface InputAndButtonSubmitTaskProps {
    onAddTask: (taskDescription: string) => void;
} 