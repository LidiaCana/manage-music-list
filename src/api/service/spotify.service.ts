import axios, { AxiosResponse } from 'axios';
import { NewRelease, ServerResponse } from '../../types/api';
import { SPOTIFY } from '../endpoints';

export type Image = {
	height: number;
	url: string;
	width: number;
};
export type Items = {
	description: string;
	id: string;
	name: string;
	images: Image[];
};
function getRelease(): Promise<
	AxiosResponse<ServerResponse<NewRelease<Items>>, NewRelease<Items>>
> {
	return axios.get<ServerResponse<NewRelease<Items>>>(SPOTIFY.GET_RELEASE);
}

function getMyLibrary(): Promise<
	AxiosResponse<ServerResponse<NewRelease<Items>>, NewRelease<Items>>
> {
	return axios.get<ServerResponse<NewRelease<Items>>>(SPOTIFY.GET_MY_LIBRARY);
}

export const SpotifyService = { getRelease, getMyLibrary };

export default SpotifyService;
