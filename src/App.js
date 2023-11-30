import React from 'react';
import './App.css';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoButtonCreate } from './TodoButtonCreate';


const Todos = [{text:'primer tarea', completed: false}];

function App() {
  return (
    <React.Fragment>

      <TodoCounter total={12} completed={25}/>
      <TodoSearch/>

      <TodoList>
        {Todos.map(Todos => (
          <TodoItem  
            text = {Todos.text}
            completed = {Todos.completed}
          />))}
      </TodoList>
      
      <TodoButtonCreate/>
      
    </React.Fragment>
  );
}

export default App;
