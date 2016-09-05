import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../app';
import SearchContainer from '../benches/search_container';

const AppRouter = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchContainer} />
      </Route>
    </Router>
  );
};

export default AppRouter;
