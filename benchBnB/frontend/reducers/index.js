import { combineReducers } from 'redux';
import benches from './benches';
import filters from './filters';
import session from './session';

const reducer = combineReducers({
  benches,
  filters,
  session
});

export default reducer;
