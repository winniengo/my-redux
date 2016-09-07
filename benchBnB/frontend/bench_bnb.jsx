import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// for testing
import { requestBenches } from './actions/bench_actions';
import { allBenches } from './reducers/selectors';
import { fetchBenches, createBench } from './util/bench_api';
import MarkerManager from './util/marker_manager';
import { signUp, logIn, logOut } from './util/session_api';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// for testing
window.store = store;
window.requestBenches = requestBenches;
window.createBench = createBench;
window.allBenches = allBenches;
window.fetchBenches = fetchBenches;
window.MarkerManager = MarkerManager;
window.signUp = signUp;
window.logIn = logIn;
window.logOut = logOut;
