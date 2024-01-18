import { Plus } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoButtonCreate() {
  const{
    setOpenModal
  } = useContext(TodoContext);
   
  return (
    <button className='w-full h-7 bg-neutral-100 hover:bg-neutral-200 rounded-md flex justify-center self-center' onClick={
      () => {
        setOpenModal(state => !state);
      }
    }><Plus className='text-black rounded-md flex justify-center self-center'/></button>
  );
}

export { TodoButtonCreate }