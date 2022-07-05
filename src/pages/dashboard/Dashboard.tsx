import { useEffect, useState } from 'react';
import SpotifyService, { Items } from '../../api/service/spotify.service';
import SongCard from '../../components/cards/SongCard';
import Layout from '../../components/layout/Layout';
import { useAppDispatch, useAppSelector } from '../../hooks/appState';
import { Login } from '../../store/actions/auth.actions';
import './_Dashboard.style.scss';

export interface Props {}
const Dashboard: React.FC = () => {
	const code = new URLSearchParams(window.location.search).get('code');
	const dispatch = useAppDispatch();

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

	const getRelease = async () => {
		try {
			const {
				status,
				data: { data },
			} = await SpotifyService.getRelease();
			if (status === 201) {
				setNewRelease(data.playlists.items);
			}
		} catch (error) {
			// TODO: Apply toast display error
		}
	};
	const getMyLibrary = async () => {
		try {
			if (user) {
				const {
					status,
					data: { data },
				} = await SpotifyService.getMyLibrary();
				if (status === 201) {
					setNewRelease(data.playlists.items);
				}
			}
		} catch (error) {
			// TODO: Apply toast display error
		}
	};
	useEffect(() => {
		if (user) {
			getRelease();
			getMyLibrary();
		}
	}, [user]);
	return (
		<Layout>
			<>
				<section data-testId="new-release" className="">
					<h1>New Release</h1>
					<div className="new-release-container">
						{release.map(({ name, id, images }) => (
							<SongCard
								key={id}
								title={name}
								cover={images[0].url}
								isAdded={false}
								onClick={(e) => console.log(e)}
							/>
						))}
					</div>
				</section>
				<section data-testId="result-search">
					<h3>Result</h3>
				</section>
			</>
		</Layout>
	);
};
export default Dashboard;
