import React from 'react';
import { render } from '@testing-library/react';
import LinkButton from './LinkButton';

test('LinkButton: renders without crashing', async () => {
	const result = render(<LinkButton url="#">Test</LinkButton>);

	expect(result).toBeTruthy();
});
