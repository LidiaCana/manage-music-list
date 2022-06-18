import { AnyAction } from 'redux';
import ActionTypes from '../type';

interface ISetCode extends AnyAction {
	payload: string | null;
}
export type AuthAction = ISetCode;

export interface AuthState {
	code: string | null;
}

export const initialState: AuthState = {
	code: null,
};

export default function authReducer(
	state = initialState,
	action: AuthAction
): AuthState {
	switch (action.type) {
		case ActionTypes.SET_CODE: {
			return {
				...state,
				code: <string>action.payload,
			};
		}

		default:
			return state;
	}
}
