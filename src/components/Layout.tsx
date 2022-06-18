import { ReactElement } from 'react';

export interface Props {
	className?: string;
	children: ReactElement;
}
const Layout: React.FC<Props> = (props) => {
	const { children } = props;
	return <div>{children}</div>;
};

export default Layout;
