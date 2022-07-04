import axios, { AxiosResponse } from 'axios';
import { NewRelease, ServerResponse } from '../../types/api';
import { SPOTIFY } from '../endpoints';

export type Image = {
	height: number | null;
	url: string | null;
	width: number | null;
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

export const SpotifyService = { getRelease };

export default SpotifyService;
