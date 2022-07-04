import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpotifyService, { Items } from '../../api/service/spotify.service';
import Layout from '../../components/Layout';
import { useAppDispatch, useAppSelector } from '../../hooks/appState';
import Path from '../../routes/paths';
import { Login, Logout } from '../../store/actions/auth.actions';

export interface Props {}
const Dashboard: React.FC = () => {
	const code = new URLSearchParams(window.location.search).get('code');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.auth.userToken?.user);

	const [release, setNewRelease] = useState<Items[]>([]);

	const getToken = async () => {
		if (code) {
			dispatch(Login(code));
		}
	};
	useEffect(() => {
		if (!user) {
			getToken();
		}
	}, []);

	const handleOnLogout = () => {
		dispatch(Logout());
		navigate(Path.LOGIN);
	};
	const getRelease = async () => {
		const {
			status,
			data: { data },
		} = await SpotifyService.getRelease();
		if (status === 201) {
			setNewRelease(data.playlists.items);
		}
	};
	useEffect(() => {
		if (user) {
			getRelease();
		}
	}, [user]);
	return (
		<Layout>
			<div>
				<h1>Welcome</h1>
				<button type="button" onClick={handleOnLogout}>
					Logout
				</button>
			</div>
		</Layout>
	);
};
export default Dashboard;
