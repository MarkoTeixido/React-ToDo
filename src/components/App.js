import React from 'react';
import '../styles/index.css';
import { TodoItem } from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButtonCreate } from '../components/TodoButtonCreate';


const Todos = [{text:'primer tarea', completed: false}];

function App() {
  return (
    <React.Fragment>
      <section className="max-w-xl bg-orange-400 flex flex-col items-center justify-center">
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
      </section>
      
    </React.Fragment>
  );
}

export default App;
