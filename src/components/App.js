import React, { useState } from 'react';
import '../styles/index.css';
import { TodoItem } from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButtonCreate } from '../components/TodoButtonCreate';


const Todos = [{text:'primer tarea', completed: false}];

function App() {
  const [todos, setTodos] = useState(Todos);

  const handleToggle = (updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.text === updatedTodo.text ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <React.Fragment>
      <section className="max-w-xl text-neutral-200 mx-auto mt-auto flex flex-col justify-center h-screen">
        <div className='max-w-full flex flex-col gap-8 p-4 border rounded-md mx-2.5'>
          <TodoCounter classname = "todoCounter" total={todos.length} completed={todos.filter(todo => todo.completed).length}/>
          <TodoSearch/>

          <TodoList>
            {Todos.map(Todos => (
              <TodoItem  
                text = {Todos.text}
                completed = {Todos.completed}
                onToggle={handleToggle}
              />))}
          </TodoList>
          
          <TodoButtonCreate/>
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default App;
