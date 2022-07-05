import React from 'react';
import Button from '../../buttons/Button';
import './_SongCard.style.scss';

export interface Props {
	title: string;
	cover: string;
	onClick: (newStatusAdded: boolean) => void;
	isAdded: boolean;
	size?: number;
}
const SongCard = ({
	title,
	cover,
	onClick,
	isAdded,
	size = 120,
}: Props): JSX.Element => {
	return (
		<div data-testid="song-card" className="song-card">
			<img alt={title} src={cover} height={size} width={size} />
			<span>{title}</span>
			<Button onClick={() => onClick(!isAdded)} className="action-btn">
				{isAdded ? 'Remove from library' : 'Save to library'}
			</Button>
		</div>
	);
};

export default SongCard;
