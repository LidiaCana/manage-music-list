import React from 'react';
import { render } from '@testing-library/react';
import SongCard from './SongCard';

test('SongCard: renders without crashing', async () => {
	const result = render(
		<SongCard title="example" cover="/" isAdded={false} onClick={jest.fn()} />
	);

	expect(result).toBeTruthy();
});
