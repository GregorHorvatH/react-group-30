import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

// jest

describe('App Tests', () => {
  it('renders the component', () => {
    const container = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
