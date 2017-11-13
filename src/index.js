import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

const store = configureStore()

ReactDOM.render(
  <Router><Root store={store} /></Router>, document.getElementById('root')
);
registerServiceWorker();
