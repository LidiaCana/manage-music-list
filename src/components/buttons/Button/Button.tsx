import { ReactElement } from 'react';

type ButtonColor = 'alert' | 'primary' | 'secondary';

export interface Props {
	children: string;
	onClick?: () => void;
	leftIcon?: ReactElement;
	rightIcon?: ReactElement;
	disabled?: boolean;
	className?: string;
}
const Button = ({
	onClick,
	children,
	leftIcon,
	rightIcon,
	disabled,
	className = '',
}: Props): JSX.Element => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className={className}
		>
			{leftIcon && <div className="">{leftIcon}</div>}
			{children}
			{rightIcon && <div className="">{rightIcon}</div>}
		</button>
	);
};

export default Button;
