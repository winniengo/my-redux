import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todos';

const todos = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return [
        ...action.todos
      ];
    case RECEIVE_TODO:
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

export default todos;
