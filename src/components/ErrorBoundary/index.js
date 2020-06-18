import React from 'react';

import ErrorPage from '../ErrorPage';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    this.props.setError(error.message);
  }

  render() {
    return this.props.error ? <ErrorPage /> : this.props.children;
  }
}

export default ErrorBoundary;
