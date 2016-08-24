import React from 'react';

const TodoListItem = ({ todo, destroyTodo, toggleTodo }) => {
  const handleDelete = todo => e => destroyTodo(todo.id);
  const handleToggle = todo => e => toggleTodo(todo);

  return (
    <li className='todo-list-item'>
      <h3>{todo.title}</h3>
      <h4>{todo.body}</h4>
      <label>
        Done
        <input
          type="checkbox"
          value="Done"
          onChange={handleToggle(todo)}
          checked={todo.done ? "checked" : ""} />
      </label>
        <button onClick={handleDelete(todo)}>Delete</button>
    </li>
  );
};

export default TodoListItem;
