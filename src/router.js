import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom'
import inTheatres from './components/inTheatres';
import comingSoon from './components/coming-soon';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from './store';

// Create an enhanced history that syncs navigation events with the store
export default (
    <Router history={browserHistory}>
      <Route path="/" component={inTheatres} />
      <Route path="/in-theatre" component={inTheatres} />
      <Route path="/coming-soon" component={comingSoon} />
    </Router>
);

