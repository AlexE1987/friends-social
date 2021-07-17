const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = { id: 6, message: state.newMessageText };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewSendTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
