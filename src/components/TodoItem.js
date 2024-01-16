import { Trash2 } from 'lucide-react';

function TodoItem(props){
    const handleCheckboxChange = () => {
        props.onToggle({
          text: props.text,
          completed: !props.completed,
        });
    };
    return (
        <li className='flex justify-between mx-1.5 p-3 text-xl font-light border rounded-md'>
            <input className='w-5 accent-blue-400' type='checkbox' checked={props.completed} onChange={handleCheckboxChange}/>
            <p className={`capitalize ${props.completed ? 'line-through' : ''}`} onClick={handleCheckboxChange}>{props.text}</p>
            <span className='text-red-400 hover:text-red-500'><Trash2/></span>
        </li>
    );
}

export { TodoItem }; 