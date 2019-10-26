import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //import component from App.js
import Header from './Header';
import createHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link} from 'react-router-dom';
const browserHistory = createHistory();



ReactDOM.render(
  <Router history={browserHistory}>
  <a href="/app">App</a><br/>
  <a href="/header">Header</a>
  <Route path="/app" component={App} />
  <Route path="/header" component={Header}/>
  </Router>,document.getElementById('root') // id root in index.js
 );

serviceWorker.unregister();
