import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// testing
import { fetchTodos } from './util/todo_api_util';
import { allTodos } from './reducers/selector';
import { requestTodos, createTodo } from './actions/todos';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.store = store;
window.allTodos = allTodos;
window.requestTodos = requestTodos;
window.createTodo = createTodo;
