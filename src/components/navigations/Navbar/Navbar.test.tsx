import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar: renders without crashing', async () => {
  const result = render(<Navbar />)

  expect(result).toBeTruthy();
});
