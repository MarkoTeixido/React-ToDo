function TodoCounter({total, completed}){
    return (
        <div className="text-center">
            <h1 className="text-3xl sm:text-6xl font-bold">MarkoToDo</h1>
            <h2 className="t-5xl font-medium todoCounter_tasks-info">has completado <span>{completed}</span> de <span>{total}</span> tareas</h2>
        </div>
    );
}

export { TodoCounter };