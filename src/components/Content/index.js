import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Users from '../Users';
import UserDetails from '../UserDetails';
import HomeWorks from '../HomeWorks';
import About from '../About';

import { routes } from '../../routes';

const Content = () => (
  <div className="body">
    <h1>Lesson 07 - Code Splitting</h1>
    <Switch>
      <Route path={routes.HOME} exact component={Home} />
      <Route path={routes.USER_DETAILS} component={UserDetails} />
      <Route path={routes.USERS} component={Users} />
      <Route path={routes.HOME_WORKS} component={HomeWorks} />
      <Route path={routes.ABOUT} component={About} />
    </Switch>
  </div>
);

export default Content;
