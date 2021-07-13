import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Petr' },
  { id: 4, name: 'Foma' },
];
const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Bye' },
  { id: 3, message: 'Yes' },
  { id: 4, message: 'Ok' },
];

export const posts = [
  { id: 1, message: 'Hi', likeCounts: 1 },
  { id: 2, message: 'Bye', likeCounts: 22 },
  { id: 3, message: 'Yes', likeCounts: 12 },
  { id: 4, message: 'Ok', likeCounts: 133 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
