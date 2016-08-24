import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    reducer,
    preloadedState,
    middleware
  )
);

export default configureStore;
