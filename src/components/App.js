import React, { useState } from 'react';
import '../styles/index.css';
import { TodoItem } from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoButtonCreate } from '../components/TodoButtonCreate';


const Todos = [
  {text:'primer tarea', completed: false},
  {text:'segunda tarea', completed: true},
  {text:'tercer tarea', completed: false}
];

function App() {
  const [todos, setTodos] = useState(Todos);
  const [searchValue, setSearchValue] = useState('');

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <section className="max-w-xl text-neutral-200 mx-auto mt-auto flex flex-col justify-center h-screen">
        <div className='max-w-full flex flex-col gap-8 p-4 border rounded-md mx-2.5'>
          <TodoCounter classname = "todoCounter" total={todos.length} completed={todos.filter(todo => todo.completed).length}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

          <TodoList>
            {searchedTodos.map(Todos => (
              <TodoItem
                key = {Todos.text}  
                text = {Todos.text}
                completed = {Todos.completed}
                onComplete = {() => completeTodo(Todos.text)}
                onDelete = {() => deleteTodo(Todos.text)}
              />))}
          </TodoList>
          
          <TodoButtonCreate/>
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default App;
