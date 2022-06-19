import { ActionReducer, AppDispatch, AppThunk } from '..';
import LoginService from '../../api/service/auth.service';
import ActionTypes from '../type';

export function Login(code: string): AppThunk {
	return async (dispatch: AppDispatch) => {
		const { data } = await LoginService(code);
		console.log(data);
		dispatch(ActionReducer(ActionTypes.LOGIN_SUCCESS, data));
	};
}

export function Logout(): AppThunk {
	return (dispatch: AppDispatch) => {
		dispatch(ActionReducer(ActionTypes.LOG_OUT));
	};
}
