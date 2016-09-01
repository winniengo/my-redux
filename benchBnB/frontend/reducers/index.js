import { combineReducers } from 'redux';
import benches from './benches';
import filters from './filters';

const reducer = combineReducers({
  benches,
  filters
});

export default reducer;
