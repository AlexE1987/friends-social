import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';

setInterval(() => {
	store.dispatch({type: 'FAKE'})
}, 1000)
let rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>,
		document.getElementById('root'),
	);
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
	rerenderEntireTree();
});

