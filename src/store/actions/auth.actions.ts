import axios from 'axios';
import cookies from 'react-cookies';
import { ActionReducer, AppDispatch, AppThunk } from '..';
import LoginService from '../../api/service/auth.service';
import ActionTypes from '../type';

export function Login(code: string): AppThunk {
	return async (dispatch: AppDispatch) => {
		const { data } = await LoginService(code);
		cookies.save('token', `Bearer ${data.data.accessToken}`, {});
		axios.defaults.headers.common.Authorization = `Bearer ${data.data.accessToken}`;
		dispatch(ActionReducer(ActionTypes.LOGIN_SUCCESS, data.data));
	};
}

export function Logout(): AppThunk {
	return (dispatch: AppDispatch) => {
		cookies.remove('token', { path: '/' });
		dispatch(ActionReducer(ActionTypes.LOG_OUT));
	};
}
