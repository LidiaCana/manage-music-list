import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth.reducer';

const persistConfig = {
	key: 'root',
	storage,
};
export default combineReducers({
	auth: persistReducer(persistConfig, authReducer),
});
