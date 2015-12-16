import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';

import './methods';

import App from '../components/app';
import Home from '../components/home';
import Page from '../components/page';
import More from '../components/more';
import NoMatch from '../components/nomatch';

Meteor.startup(function () {
  
  const history = createBrowserHistory();
  
  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/page" component={Page} />
      <Route path="/more" component={More} />
      <Route path="*" component={NoMatch}/>
    </Route>
  );
  
  ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app')) ;
});
