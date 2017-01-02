import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

ReactDom.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
