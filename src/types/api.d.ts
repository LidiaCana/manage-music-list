/* Type all the API Response */

import { IUser } from '../store/reducers/auth.reducer';

export interface ServerResponse<T> {
	data: T;
}
export type UserToken = {
	accessToken: string | null;
	user: IUser | null;
};

export type NewRelease<T> = {
	playlists: {
		items: T[];
	};
};
