import React from 'react';
import ReactDOM from 'react-dom';
import CartBut from './CartBut';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartBut />, div);

  expect(div.textContent).toBe('0')

  ReactDOM.unmountComponentAtNode(div);
});