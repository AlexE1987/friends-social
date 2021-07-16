// import state, { subscribe } from './redux/state';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
// import { addPost, updateNewPostText } from './redux/state';
import store from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
