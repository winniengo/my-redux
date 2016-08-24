import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <div>
        <ul className='todo-list'>
          {this.props.todos.map((todo, idx) => (
            <TodoListItem
              key={idx}
              todo={todo}
              toggleTodo={this.props.toggleTodo}
              destroyTodo={this.props.destroyTodo} />
          ))}
        </ul>
        <TodoForm
          createTodo={this.props.createTodo} />
      </div>
    );
  }
}

export default TodoList;
