import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import type { RootState } from '../store';

export const useAppDispatch = (): ThunkDispatch<
	RootState,
	unknown,
	AnyAction
> => useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
