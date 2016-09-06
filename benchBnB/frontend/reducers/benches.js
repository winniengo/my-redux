import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';
import merge from 'lodash/merge';

const benches = (state = {}, action) => {
  console.log(action);
  switch(action.type) {
    case RECEIVE_BENCHES:
      return merge({}, action.benches);
    case RECEIVE_BENCH:
      return merge({}, state, action.bench);
    default:
      return state;
  }
}

export default benches;
