import { useEffect } from 'react';
import LoginService from '../../api/service/auth.service';
import Layout from '../../components/Layout';

export interface Props {}
const Dashboard: React.FC = () => {
	const code = new URLSearchParams(window.location.search).get('code');

	const getToken = async () => {
		if (code) {
			const response = await LoginService(code);
			console.log(response);
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
