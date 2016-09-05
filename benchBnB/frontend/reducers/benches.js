import { receiveBenches, RECEIVE_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';

const benches = (state = {}, action) => {
  console.log(action);
  switch(action.type) {
    case RECEIVE_BENCHES:
      return merge({}, action.benches);
    default:
      return state;
  }
}

export default benches;
