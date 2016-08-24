import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todos';
import merge from 'lodash/merge';

const todos = (state = {}, action) => {
  let nextState;

  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      return merge({}, state, {
        [action.todo.id]: action.todo
      });
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default todos;
