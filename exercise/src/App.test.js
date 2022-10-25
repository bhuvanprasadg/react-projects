import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders application without crashing', () => {
  render(<App />);
});

const { debug } = render(<App/>);
debug();

jest.mock('./components/common/Navigation', () => () => (<div>Navigation</div>));
jest.mock('./components/common/Navigation', () => () => (<div>BookList</div>));