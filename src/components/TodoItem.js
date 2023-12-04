function TodoItem(props){
    return (
        <li className="todoItem_item">
            <span>V</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem }; 