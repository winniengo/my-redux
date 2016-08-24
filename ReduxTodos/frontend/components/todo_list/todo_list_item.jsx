import React from 'react';

const TodoListItem = ({ todo }) => (
  <li className='todo-list-item'>
    {todo.title}
    <ul>
      <li>{todo.body}</li>
    </ul>
  </li>
);

export default TodoListItem;
