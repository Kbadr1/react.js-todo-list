import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoListContextProvider from './context/TodoListContext';
import TodoForm from './components/TodoForm';

function App() {

    return (
        <TodoListContextProvider>
            <div className="App container">
                <h1>Todo List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoListContextProvider>
    );
}

export default App;
