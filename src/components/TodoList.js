import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import Todo from './Todo';

const TodoList = () => {

    const { todos } = useContext(TodoListContext);

    return (
        <div>
            {todos.length ? (
                <ul>
                    {todos.map(todo => {
                        return <Todo todo={todo} key={todo.id}/>
                    })}
                </ul>
            ) : (
                <div className="empty">No Todos</div>
            )}
        </div>
    );
}
 
export default TodoList;