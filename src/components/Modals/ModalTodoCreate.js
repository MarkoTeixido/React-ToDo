import ReactDOM from 'react-dom';

function ModalTodoCreate({ children }) {
  return ReactDOM.createPortal(
    <div className='absolute w-full border top-0 left-auto h-screen flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm backdrop-brightness-50 bg-neutral-50 bg-opacity-5'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { ModalTodoCreate };