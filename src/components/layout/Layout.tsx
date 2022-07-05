import { ReactElement } from 'react';
import Navbar from '../navigations/Navbar';

export interface Props {
	className?: string;
	children: ReactElement;
}
const Layout: React.FC<Props> = (props) => {
	const { children } = props;
	return (
		<div style={{ marginTop: '100px' }}>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
