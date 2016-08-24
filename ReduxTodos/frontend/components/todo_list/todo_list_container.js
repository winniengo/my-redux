import { connect } from 'react-redux';
import React from 'react';
import { allTodos } from '../../reducers/selector';
import { requestTodos } from '../../actions/todos';

import TodoList from './todo_list';

const mapStateToProps = ({ todos }) => ({
  todos: allTodos(todos)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
