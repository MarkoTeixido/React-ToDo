function TodoCounter({total, completed}){
    return (
        <>
            <h1 className="todoCounter_title">MarkoToDo</h1>
            <h2 className="todoCounter_tasks-info">has completado {completed} de {total} tareas</h2>
        </>
    );
}

export { TodoCounter };