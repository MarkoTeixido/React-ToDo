import { useState } from 'react';
import { Trash2 } from 'lucide-react';

function TodoItem(props){
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };
    return (
        <li className='flex justify-between mx-1.5 p-3 text-xl font-light border rounded-md'>
            <input className='w-5 accent-blue-400' type='checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
            <p className={`capitalize ${isChecked ? 'line-through' : ''}`}>{props.text}</p>
            <span className='text-red-400 hover:text-red-500'><Trash2/></span>
        </li>
    );
}

export { TodoItem }; 