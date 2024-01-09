function TodoCounter({total, completed}){
    return (
        <div className="bg-orange-700 todoCounter">
            <h1 className="todoCounter_title">MarkoToDo</h1>
            <h2 className="todoCounter_tasks-info">has completado <span>{completed}</span> de <span>{total}</span> tareas</h2>
        </div>
    );
}

export { TodoCounter };