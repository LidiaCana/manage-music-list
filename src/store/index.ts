import {
	createStore,
	applyMiddleware,
	Action,
	AnyAction,
	compose,
} from 'redux';
import { persistStore } from 'redux-persist';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import reducer from './reducers';
import ActionTypes from './type';
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export const ActionReducer = <T>(
	type: ActionTypes,
	payload?: T
): AnyAction => ({
	type,
	payload,
});

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;
