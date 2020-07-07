import React, { useContext } from 'react'
import { TodoListContext } from '../context/TodoListContext';

const Todo = ({ todo }) => {

    const { removeTodo, findItem } = useContext(TodoListContext);

    return (
        <li>
            <span>{todo.title}</span>
            <div>
                <button onClick={() => removeTodo(todo.id)}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <button onClick={() => findItem(todo.id)}>
                    <i className="fa fa-pencil"></i>
                </button>
            </div>
        </li>
    );
}
 
export default Todo;