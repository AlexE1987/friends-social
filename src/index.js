// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import state from './redux/state';
// import { addPost } from './redux/state';
import { rerenderEntireTree } from './render';

// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost} />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
rerenderEntireTree(state);
