import React, { Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';

import routes from '../routes';

const Content = () => {
  const [error, setError] = useState('');

  return (
    <div className="body">
      <h1>Lesson 07 - Code Splitting</h1>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map(({ name, path, component: RouteComponent, isExact }) => (
            <ErrorBoundary error={error} setError={setError}>
              <Route
                key={name}
                path={path}
                component={RouteComponent}
                exact={isExact}
              />
            </ErrorBoundary>
          ))}
        </Suspense>
      </Switch>
    </div>
  );
};

export default Content;
