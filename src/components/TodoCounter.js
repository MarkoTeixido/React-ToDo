function TodoCounter({total, completed}){
    return (
        <>
            <h1 className="todoCounter_title">MarkoToDo</h1>
            <h2 className="todoCounter_tasks-info">has completado <span>{completed}</span> de <span>{total}</span> tareas</h2>
        </>
    );
}

export { TodoCounter };