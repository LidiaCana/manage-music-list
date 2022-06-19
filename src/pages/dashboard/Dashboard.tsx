import { useEffect } from 'react';
import LoginService from '../../api/service/auth.service';
import Layout from '../../components/Layout';
import { useAppDispatch } from '../../hooks/appState';
import { Login } from '../../store/actions/auth.actions';

export interface Props {}
const Dashboard: React.FC = () => {
	const code = new URLSearchParams(window.location.search).get('code');
	const dispatch = useAppDispatch();

	const getToken = async () => {
		if (code) {
			dispatch(Login(code));
		}
	};
	useEffect(() => {
		getToken();
	}, []);
	return (
		<Layout>
			<div>
				<h1>Welcome</h1>
			</div>
		</Layout>
	);
};
export default Dashboard;
