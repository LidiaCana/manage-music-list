export const AUTH = {
	LOGIN: (code: string): string => `/auth/login?code=${code}`,
};

export const SPOTIFY = {
	GET_RELEASE: '/spotify/new-release',
};
