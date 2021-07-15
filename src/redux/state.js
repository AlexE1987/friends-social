const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    // debugger;
    if (action.type === ADD_POST) {
      let newPost = { id: 0, message: this._state.profilePage.newPostText, likeCounts: 21 };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = { id: 4, message: this._state.dialogsPage.newMessageText };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addActionCreatorPost = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewSendTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

window.store = store;

export default store;
