import axios, { AxiosResponse } from 'axios';
import { ServerResponse, UserToken } from '../../types/api';
import { AUTH } from '../endpoints';

function LoginService(
	code: string
): Promise<AxiosResponse<ServerResponse<UserToken>, UserToken>> {
	return axios.post<ServerResponse<UserToken>>(AUTH.LOGIN(code), { code });
}

export default LoginService;
