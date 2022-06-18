import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

function AppRoutes(): JSX.Element {
	return (
		<Routes>
			<Route path="/home" element={<Dashboard />} />
			<Route path="/" element={<Login />} />
			<Route path="*" element={<h1>No Found</h1>} />
		</Routes>
	);
}
export default AppRoutes;
