import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

// jest - desribe, it, test, expect

describe('MaterialComponent Tests', () => {
  it('renders the component', () => {
    const container = render(<Component />);

    expect(container).toMatchSnapshot();
  });

  test('assert there are 3 buttons', () => {
    const { container } = render(<Component />);

    expect(container.querySelectorAll('button').length).toBe(3);
  });
});
