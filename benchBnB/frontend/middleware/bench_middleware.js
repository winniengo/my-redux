import { REQUEST_BENCHES, receiveBenches } from '../actions/bench_actions';
import { fetchBenches } from '../util/bench_api';

const benchMiddleware = store => next => action => {
  const error = e => console.log(e);
  switch(action.type) {
    case REQUEST_BENCHES:
      const success = data => store.dispatch(receiveBenches(data));
      fetchBenches(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default benchMiddleware;
