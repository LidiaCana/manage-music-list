---
to: src/assets/icons/<%= name %>/<%= name %>.tsx
---
import { IconProps } from '../../types';

const <%= name %> = ({
	size = 24,
	className = 'fill-gray-60',
}: IconProps): JSX.Element => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			{/* SVG Paths go here */}
		</svg>
	);
};

export default <%= name %>;