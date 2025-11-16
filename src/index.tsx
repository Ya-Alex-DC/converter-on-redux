import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/store';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found in HTML');

const root = ReactDOM.createRoot(rootElement);
root.render(
	<Provider store={store} >
		<App />
	</Provider>
);

