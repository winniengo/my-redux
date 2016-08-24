import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// testing
import { fetchTodos } from './util/todo_api_util';
import { allTodos } from './reducers/selector';
import { requestTodos } from './actions/todos';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<div>ReduxTodos</div>, root);
});

window.store = store;
window.allTodos = allTodos;
window.requestTodos = requestTodos;
