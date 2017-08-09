import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import Dashboard from './components/Dashboard';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={Dashboard} />
    </Router>
);

