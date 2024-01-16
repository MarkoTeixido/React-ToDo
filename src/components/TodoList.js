function TodoList(props){
    return (
        <ul className="flex flex-col gap-2">
            {props.children}
        </ul>
    );
}

export { TodoList }; 