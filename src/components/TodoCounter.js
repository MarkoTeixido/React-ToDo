import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCounter(){
    const {
        completed,
        total,
    } = useContext(TodoContext);

    return (
        <div className="text-center">
            <h1 className="text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-3xl sm:text-6xl font-bold">MarkoToDo</h1>
            <h2 className="t-5xl font-medium todoCounter_tasks-info">has completado <span>{completed}</span> de <span>{total}</span> tareas</h2>
        </div>
    );
}

export { TodoCounter };