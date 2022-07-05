import React, { ReactElement } from 'react';
import './_LinkButton.style.scss';

export interface Props {
	url: string;
	children: string | ReactElement;
}
const LinkButton = ({ url, children }: Props): JSX.Element => {
	return (
		<a className="link-button btn-primary btn-animated" href={url}>
			{children}
		</a>
	);
};

export default LinkButton;
