import React, { useContext, useState, useEffect } from 'react'
import { TodoListContext } from '../context/TodoListContext';

const TodoForm = () => {

    const { addTodo, clearList, editItem, editTodo } = useContext(TodoListContext);

    const [title, setTitle] = useState("");

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!editItem) {
            addTodo(title);
            setTitle("");
        } else {
            editTodo(title, editItem.id);
        }
    }

    useEffect(() => {
        if(editItem !== null) {
            setTitle(editItem.title);
        } else {
            setTitle("");
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo..." required value={title} onChange={handleChange}/>
            <div>
                <button type="submit">{editItem ? "Edit Todo" : "Add Todo"}</button>
                <button onClick={clearList}>Clear</button>
            </div>
        </form>
    );
}
 
export default TodoForm;