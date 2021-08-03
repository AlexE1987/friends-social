import './index.css';
import SamuraiJSApp from './App';
import {BrowserRouter} from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';

ReactDOM.render(
	// <BrowserRouter>
	// 	<Provider store={store}>
	<SamuraiJSApp/>,
// 	</Provider>
// </BrowserRouter>,
	document.getElementById('root'),
)
;

