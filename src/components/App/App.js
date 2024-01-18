import React from 'react';
import '../../index.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../../context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
