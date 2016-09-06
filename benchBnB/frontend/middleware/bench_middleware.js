import {
  REQUEST_BENCHES,
  receiveBenches,
  CREATE_BENCH,
  receiveBench } from '../actions/bench_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';
import { fetchBenches, createBench } from '../util/bench_api';

const benchMiddleware = store => next => action => {
  const error = e => console.log(e);
  let success;

  switch(action.type) {
    case REQUEST_BENCHES:
      success = data => store.dispatch(receiveBenches(data));
      fetchBenches(action.filters, success, error);
      return next(action);
    case UPDATE_BOUNDS:
      next(action);
      store.dispatch(requestBenches({bounds: action.bounds}));
      break;
    case CREATE_BENCH:
      success = data => store.dispatch(receiveBench(data));
      createBench(action.bench, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default benchMiddleware;
