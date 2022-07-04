import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import EnvironmentVariables from '../constats/enviromentVariables';
import { useAppSelector } from '../hooks/appState';
import useAxios from '../hooks/useAxios';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import Path from './paths';

function AppRoutes(): JSX.Element {
	const { handleResponseErrors } = useAxios();
	const token = useAppSelector((state) => state.auth.userToken?.accessToken);
	axios.interceptors.response.use((response) => response, handleResponseErrors);
	axios.defaults.baseURL = EnvironmentVariables.API_URL;
	useEffect(() => {
		if (token) {
			axios.defaults.headers.common.Authorization = `Bearer ${token}`;
		}
	}, [token]);
	return (
		<Routes>
			<Route path={Path.DASHBOARD} element={<Dashboard />} />
			<Route path={Path.LOGIN} element={<Login />} />
			<Route path="*" element={<h1>No Found</h1>} />
		</Routes>
	);
}
export default AppRoutes;
