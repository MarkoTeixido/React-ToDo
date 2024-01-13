import React from 'react';
import '../styles/index.css';
import { TodoItem } from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButtonCreate } from '../components/TodoButtonCreate';


const Todos = [{text:'primer tarea', completed: false}];

function App() {
  document.body.classList.add('bg-neutral-800');
  return (
    <React.Fragment>
      <section className="max-w-xl text-neutral-200 mx-auto mt-auto flex flex-col justify-center h-screen">
        <div className='max-w-full flex flex-col gap-8 p-4 border rounded-md'>
          <TodoCounter classname = "todoCounter" total={12} completed={25}/>
          <TodoSearch/>

          <TodoList>
            {Todos.map(Todos => (
              <TodoItem  
                text = {Todos.text}
                completed = {Todos.completed}
              />))}
          </TodoList>
          
          <TodoButtonCreate/>
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default App;
