import { connect } from 'react-redux';
import React from 'react';
import { allTodos } from '../../reducers/selector';
import { requestTodos, createTodo, destroyTodo, toggleTodo } from '../../actions/todos';

import TodoList from './todo_list';

const mapStateToProps = ({ todos }) => ({
  todos: allTodos(todos)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  destroyTodo: id => dispatch(destroyTodo(id)),
  toggleTodo: todo => {
    todo.done = !todo.done;
    dispatch(toggleTodo(todo));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
