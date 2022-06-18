import axios, { AxiosResponse } from 'axios';
import AUTH from '../endpoints';

export interface ServerResponse<T> {
	data: T;
}
interface IAuth {
	token: string;
}

function LoginService(
	code: string
): Promise<AxiosResponse<ServerResponse<IAuth>, IAuth>> {
	return axios.post<ServerResponse<IAuth>>(AUTH.LOGIN(), {
		code,
	});
}

export default LoginService;
