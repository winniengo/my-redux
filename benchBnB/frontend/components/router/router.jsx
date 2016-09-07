import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../app';
import SearchContainer from '../benches/search_container';
import BenchFormContainer from '../benches/bench_form_container';
import SessionFormContainer from '../session/session_form_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.renderRoutes = this.renderRoutes.bind(this);
    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);

    this.routes = this.renderRoutes();
  }

  ensureLoggedIn(nextState, replace) {
    if (!this.props.currentUser) {
      replace('/login');
    }
  }

  redirectIfLoggedIn(nextState, replace) {
    if (this.props.currentUser) {
      replace('/');
    }
  }

  renderRoutes () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SearchContainer} onEnter={this.ensureLoggedIn} />
          <Route path='/signup' component={SessionFormContainer} onEnter={this.redirectIfLoggedIn} />
          <Route path='/login' component={SessionFormContainer} onEnter={this.redirectIfLoggedIn} />
          <Route path='/benches/new' component={BenchFormContainer} onEnter={this.ensureLoggedIn} />
        </Route>
      </Router>
    );
  }

  render () {
    return (
      <div className='app-router'>
        {this.routes}
      </div>
    )
  }
};

export default AppRouter;
