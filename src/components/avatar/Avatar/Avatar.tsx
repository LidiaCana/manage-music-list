import React, { ReactElement } from 'react';
import './_Avatar.style.scss';

export interface Props {
	image?: string;
	alt: string;
}

const getInitials = (name = ''): string => {
	const separatedName = name.split(' ');

	if (!separatedName.length) {
		return '';
	}
	return (
		separatedName[0].charAt(0) +
		(separatedName.length > 1 ? separatedName[1].charAt(0) : '')
	);
};
const Avatar = ({ image, alt }: Props): JSX.Element => {
	return (
		<div data-testid="avatar" className="avatar">
			{image ? <img src={image} alt={alt} /> : <h2>{getInitials(alt)}</h2>}
		</div>
	);
};

export default Avatar;
