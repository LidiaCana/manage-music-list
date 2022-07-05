interface TextInputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
	helperText?: string;
	label?: {
		text: string;
		icon?: React.ReactElement;
	};
	icon?: {
		position: 'right' | 'left';
		element: React.ReactElement;
	};
}

const TextInput = ({
	helperText,
	label,
	icon,
	...restProps
}: TextInputProps): JSX.Element => {
	const id = `TextInput`;
	return (
		<div>
			{label && (
				<label htmlFor={id} className="">
					{label.text} {label.icon}
				</label>
			)}
			<div className="relative">
				{icon && icon.position === 'left' && <div className="">{icon.element}</div>}
				<input {...restProps} type="text" name={id} id={id} className="" />
				{icon && icon.position === 'right' && (
					<div className="">{icon.element}</div>
				)}
			</div>
			{helperText && (
				<p className="" id={`${id}-description`}>
					{helperText}
				</p>
			)}
		</div>
	);
};

export default TextInput;
