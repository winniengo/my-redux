import { applyMiddleware } from 'redux';
import todoMiddleware from './todo_middleware';

const middleware = applyMiddleware(
  todoMiddleware
);

export default middleware;
