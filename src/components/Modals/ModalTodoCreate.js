import ReactDOM from 'react-dom';

function ModalTodoCreate({ setOpenModal }) {
  return ReactDOM.createPortal(
    <div className='absolute w-full border top-0 left-auto h-screen flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 bg-neutral-50 bg-opacity-5'>
        <div className='flex flex-col items-center gap-4 p-4 border rounded-md bg-slate-100'>
            <p className='z-10'>Crear Una Nueva Tarea</p>
            <input className='px-1 border-2 rounded-sm border-neutral-400' placeholder='Ingrese la tarea'></input>
            <div className='flex gap-4'>
                <button className='px-2 border rounded-md hover:border-red-400 hover:text-red-500' onClick={() => {setOpenModal(state => !state);}}>Cancelar</button>
                <button className='px-2 border rounded-md hover:border-blue-400 hover:text-blue-500'>Agregar</button>
            </div>
        </div>
    </div>,
    document.getElementById('modal')
  );
}

export { ModalTodoCreate };