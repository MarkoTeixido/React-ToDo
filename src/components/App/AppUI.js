import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoList } from '../TodoList';
import { TodoButtonCreate } from '../TodoButtonCreate';
import { TodoContext } from '../../context/TodoContext';

function AppUI() {
    return (
        <React.Fragment>
          <section className="max-w-xl text-neutral-200 mx-auto mt-auto flex flex-col justify-center h-screen">
            <div className='max-w-full flex flex-col gap-8 p-4 border rounded-md mx-2.5'>
              <TodoCounter />
              <TodoSearch />

              <TodoContext.Consumer>
              {({
                loading,
                error,
                searchedTodos,
                completeTodo,
                deleteTodo,
              }) => (

                <TodoList>
                  {loading && (
                    <>
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
                
              )}
              </TodoContext.Consumer>
              
              <TodoButtonCreate/>
            </div>
          </section> 
        </React.Fragment>
      );
};

export { AppUI };


