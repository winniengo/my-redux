import { REQUEST_TODOS, receiveTodos, CREATE_TODO, receiveTodo, DESTROY_TODO, removeTodo, TOGGLE_TODO } from '../actions/todos.js';
import { fetchTodos, createTodo, updateTodo, destroyTodo } from '../util/todo_api_util';

const todoMiddleware = store => next => action => {
  const error = error => console.log(error);
  let success;

  switch(action.type) {
    case REQUEST_TODOS:
      success = data => store.dispatch(receiveTodos(data));
      fetchTodos(success, error);
      break;
    case CREATE_TODO:
      success = data => store.dispatch(receiveTodo(data));
      createTodo(action.todo, success, error);
      break;
    case DESTROY_TODO:
      success = data => store.dispatch(removeTodo(data));
      destroyTodo(action.id, success, error);
      break;
    case TOGGLE_TODO: // update
      success = data => store.dispatch(receiveTodo(data));
      updateTodo(action.todo, success, error);
      break;
    default:
      next(action);
  }
};

export default todoMiddleware;
