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
import { clearErrors } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}}
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.store = store; // for testing
});

// for testing
window.requestBenches = requestBenches;
window.createBench = createBench;
window.allBenches = allBenches;
window.fetchBenches = fetchBenches;
window.MarkerManager = MarkerManager;
window.signUp = signUp;
window.logIn = logIn;
window.logOut = logOut;
window.clearErrors = clearErrors;
