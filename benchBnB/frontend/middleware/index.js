import { applyMiddleware } from 'redux';
import benchMiddleware from './bench_middleware';

export default applyMiddleware(
  benchMiddleware
);
