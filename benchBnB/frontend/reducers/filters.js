import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const initialState = {
  bounds: {}
};

const filters = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_BOUNDS:
      const bounds = action.bounds;
      return merge(state, {bounds});
    default:
      return state;
  }
};

export default filters;
