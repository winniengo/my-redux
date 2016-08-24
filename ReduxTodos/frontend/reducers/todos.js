import { RECEIVE_TODOS } from '../actions/todos';

const todos = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return [
        ...action.todos
      ];
    default:
      return state;
  }
};

export default todos;
