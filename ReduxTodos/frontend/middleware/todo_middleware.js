import { REQUEST_TODOS, receiveTodos } from '../actions/todos.js';
import { fetchTodos } from '../util/todo_api_util';

const todoMiddleware = store => next => action => {
  switch(action.type) {
    case REQUEST_TODOS:
      const success = data => store.dispatch(receiveTodos(data));
      const error = error => console.log(error);
      fetchTodos(success, error);
      break;
    default:
      next(action);
  }
};

export default todoMiddleware;
