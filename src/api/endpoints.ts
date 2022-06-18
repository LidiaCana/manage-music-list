import EnvironmentVariables from '../constats/enviromentVariables';

const AUTH = {
	LOGIN: (): string => `${EnvironmentVariables.API_URL}/login`,
};
export default AUTH;
