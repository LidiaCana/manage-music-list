import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button: renders without crashing', async () => {
	const result = render(<Button>Test</Button>);

	expect(result).toBeTruthy();
});
