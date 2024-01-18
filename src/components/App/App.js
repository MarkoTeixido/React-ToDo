import React, { useState } from 'react';
import '../../index.css';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// const Todos = [
//   {text:'primer tarea', completed: false},
//   {text:'segunda tarea', completed: true},
//   {text:'tercer tarea', completed: false}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(Todos));
// localStorage.removeItem('TODOS_V1');

function App() {

  const {
    item: todos, 
    saveitem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      loading={loading}
      error={error}
      todos={todos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
