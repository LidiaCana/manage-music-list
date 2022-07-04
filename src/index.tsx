import React from 'react';
import ReactDOM from 'react-dom/client';
import cookies from 'react-cookies';
import axios from 'axios';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store, { persistor } from './store';

import AppRoutes from './routes';

const token = cookies.load('token');

if (token && token.length) {
	axios.defaults.headers.common.Authorization = token;
}
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</PersistGate>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
