import { ActionReducer, AppDispatch, AppThunk } from '..';
import ActionTypes from '../type';

export function SetSpotifyCode(code: string): AppThunk {
	return (dispatch: AppDispatch) => {
		dispatch(ActionReducer(ActionTypes.SET_CODE, code));
	};
}

export function Login(token: string): AppThunk {
	return (dispatch: AppDispatch) => {
		dispatch(ActionReducer(ActionTypes.LOGIN_SUCCESS, token));
	};
}
