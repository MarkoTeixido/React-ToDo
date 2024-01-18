import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoList } from '../TodoList';
import { TodoButtonCreate } from '../TodoButtonCreate';

function AppUI({
    loading,
    error,
    todos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
          <section className="max-w-xl text-neutral-200 mx-auto mt-auto flex flex-col justify-center h-screen">
            <div className='max-w-full flex flex-col gap-8 p-4 border rounded-md mx-2.5'>
              <TodoCounter classname = "todoCounter" total={todos.length} completed={todos.filter(todo => todo.completed).length}/>
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
    
              <TodoList>
                {loading && (
                  <>
                    <TodoLoading />
                    <TodoLoading />
                    <TodoLoading />
                  </>
                )}
                {error && <TodoError/>}
                {(!loading && searchedTodos.length === 0) && <TodoEmpty />}

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
};

export { AppUI };