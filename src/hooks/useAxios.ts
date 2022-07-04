import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Path from '../routes/paths';
import { Logout } from '../store/actions/auth.actions';
import { useAppDispatch, useAppSelector } from './appState';

interface AxiosSettings {
	handleResponseErrors: (error: AxiosError) => void;
}
const useAxios = (): AxiosSettings => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { userToken } = useAppSelector((state) => state.auth);
	const handleResponseErrors = useCallback(
		(error: AxiosError) => {
			const responseStatus = error.response?.status || 400;

			switch (responseStatus) {
				case 400:
					dispatch(Logout());
					navigate(Path.LOGIN);
					// TODO: display toast with the message about error 400
					break;
				case 401:
					dispatch(Logout());
					navigate(Path.LOGIN);
					// TODO: display toast with the message about error 401
					break;
				default: {
				}
			}

			return Promise.reject(error);
		},
		[userToken]
	);

	return { handleResponseErrors };
};

export default useAxios;
