import { applyMiddleware } from 'redux';
import benchMiddleware from './bench_middleware';
import sessionMiddleware from './session_middleware';

export default applyMiddleware(
  benchMiddleware,
  sessionMiddleware
);
