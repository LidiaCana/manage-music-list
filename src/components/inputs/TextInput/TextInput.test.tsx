import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

test('TextInput: renders without crashing', async () => {
	const result = render(<TextInput value="f" onChange={jest.fn()} />);

	expect(result).toBeTruthy();
});
