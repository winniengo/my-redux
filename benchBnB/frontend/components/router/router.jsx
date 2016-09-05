import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../app';
import SearchContainer from '../benches/search_container';
import BenchFormContainer from '../benches/bench_form_container';

const AppRouter = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchContainer} />
        <Route path='/benches/new' component={BenchFormContainer} />
      </Route>
    </Router>
  );
};

export default AppRouter;
