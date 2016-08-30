import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// for testing
import { requestBenches } from './actions/bench_actions';
import { allBenches } from './reducers/selectors';
import { fetchBenches } from './util/bench_api';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// for testing
window.store = store;
window.requestBenches = requestBenches;
window.allBenches = allBenches;
window. fetchBenches = fetchBenches;
