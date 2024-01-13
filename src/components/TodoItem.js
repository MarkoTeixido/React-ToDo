import { Trash2 } from 'lucide-react';

function TodoItem(props){
    return (
        <li className='flex justify-between mx-1.5 text-xl font-light'>
            <input className='w-5 accent-blue-400' type='checkbox'/>
            <p>{props.text}</p>
            <span className='text-red-400 hover:text-red-500'><Trash2/></span>
        </li>
    );
}

export { TodoItem }; 