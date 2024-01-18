import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    
    const onCancel = () => {
        setOpenModal(state => !state);
    };
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    return (
        <form onSubmit={onSubmit} className='flex flex-col items-center gap-4 p-4 border rounded-md bg-slate-100'>
            <label className='z-10'>Crear Una Nueva Tarea</label>
            <textarea className='px-1 border-2 rounded-sm border-neutral-400' placeholder='Ingrese la tarea' onChange={onChange}></textarea>
            <div className='flex gap-4'>
                <button type="button" className='px-2 border rounded-md hover:border-red-400 hover:text-red-500' onClick={onCancel}>Cancelar</button>
                <button type="submit" className='px-2 border rounded-md hover:border-blue-400 hover:text-blue-500'>Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };