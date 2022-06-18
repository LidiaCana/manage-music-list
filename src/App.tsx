import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import './App.css';
import { useAppDispatch } from './hooks/appState';
import useAuth from './hooks/useAuth';
import { SetSpotifyCode } from './store/actions/auth.actions';

function App(): JSX.Element {
	const spotifyApi = new SpotifyWebApi({
		clientId: process.env.REACT_APP_CLIENT_ID,
	});
	const code = new URLSearchParams(window.location.search).get('code');
	const getToken = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_BASE_URL}/login`,
				{
					code,
				}
			);

			console.log(data);
		} catch (error) {
			console.log(error);
			// window.location = '/';
		}
	};

	useEffect(() => {
		if (code) {
			getToken();
		}
	}, [code]);

	return (
		<div className="App">
			<body>{}</body>
		</div>
	);
}

export default App;
