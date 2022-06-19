/* Type all the API Response */

export interface ServerResponse<T> {
	data: T;
}
export type UserToken = {
	accessToken: string | null;
	refreshToken: string | null;
	expiresIn: string | null;
};
