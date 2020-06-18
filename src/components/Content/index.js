import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';

import routes from '../routes';

const Content = () => {
  return (
    <div className="body">
      <h1>Lesson 07 - Code Splitting</h1>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map(({ name, path, component: RouteComponent, isExact }) => (
            <Route
              key={name}
              path={path}
              // component={RouteComponent}
              render={(props) => (
                <ErrorBoundary>
                  <RouteComponent {...props} />
                </ErrorBoundary>
              )}
              exact={isExact}
            />
          ))}
        </Suspense>
      </Switch>
    </div>
  );
};

export default Content;
