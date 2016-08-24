import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <ul className='todo-list'>
        {this.props.todos.map((todo, idx) => (
          <TodoListItem key={idx} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
