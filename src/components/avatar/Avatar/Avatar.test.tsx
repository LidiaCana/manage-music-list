import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';

test('Avatar: renders without crashing', async () => {
	const result = render(<Avatar alt="Test" />);

	expect(result).toBeTruthy();
});
