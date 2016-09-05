import { REQUEST_BENCHES, receiveBenches, requestBenches } from '../actions/bench_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';
import { fetchBenches } from '../util/bench_api';

const benchMiddleware = store => next => action => {
  const error = e => console.log(e);
  switch(action.type) {
    case REQUEST_BENCHES:
      const success = data => store.dispatch(receiveBenches(data));
      fetchBenches(action.filters, success, error);
      return next(action);
    case UPDATE_BOUNDS:
      next(action);
      store.dispatch(requestBenches({bounds: action.bounds}));
      break;
    default:
      return next(action);
  }
};

export default benchMiddleware;
