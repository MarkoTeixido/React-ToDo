import { Plus } from 'lucide-react';

function TodoButtonCreate() {
  return (
    <button className='w-full bg-neutral-100 hover:bg-neutral-200 rounded-md flex justify-center self-center'><Plus className='text-black rounded-md'/></button>
  )
}

export { TodoButtonCreate }