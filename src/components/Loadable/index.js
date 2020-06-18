import React, { Component } from 'react';

export default function (loader) {
  return class Loadable extends Component {
    state = {
      component: null,
      error: '',
    };

    componentDidMount() {
      // const { default: component } = await loader();

      // this.setState({ component });
      loader()
        .then(({ default: component }) => this.setState({ component }))
        .catch((error) => this.setState({ error }));
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <div>The Page Is Loading...</div>
      );
    }
  };
}
