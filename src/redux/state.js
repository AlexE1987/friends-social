import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likeCounts: 1 },
        { id: 2, message: 'Bye', likeCounts: 22 },
        { id: 3, message: 'Yes', likeCounts: 12 },
        { id: 4, message: 'Ok', likeCounts: 133 },
      ],
      newPostText: 'my text',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Petr' },
        { id: 4, name: 'Foma' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Bye' },
        { id: 3, message: 'Yes' },
        { id: 4, message: 'Ok' },
      ],
      newMessageText: 'enter message',
    },

    sidebar: {
      friends: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Petr' },
        { id: 4, name: 'Foma' },
      ],
    },
  },

  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
