import { AnyAction } from 'redux';
import { UserToken } from '../../types/api';
import ActionTypes from '../type';

interface IUserToken extends AnyAction {
	payload: UserToken | null;
}
export type AuthAction = IUserToken;

export interface AuthState {
	userToken: UserToken | null;
}

export const initialState: AuthState = {
	userToken: null,
};

export default function authReducer(
	state = initialState,
	action: AuthAction
): AuthState {
	switch (action.type) {
		case ActionTypes.LOGIN_SUCCESS: {
			return {
				...state,
				userToken: <UserToken>action.payload,
			};
		}

		default:
			return state;
	}
}
