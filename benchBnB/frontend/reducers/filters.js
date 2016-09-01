import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const initialState = {
  bounds: {}
};

const filters = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_BOUNDS:
      return merge(state, {bounds: action.bounds});
    default:
      return state;
  }
};

export default filters;
