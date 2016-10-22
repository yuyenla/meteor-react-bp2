import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import MainContainer from '/imports/ui/containers/MainContainer.jsx';
//import Home from '/imports/ui/pages/Home.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';


export default () => (
  <Router history={browserHistory}>
    <Route component={MainContainer}>
      <Route path="/" component={HomeContainer} />
    </Route>
  </Router>
);
