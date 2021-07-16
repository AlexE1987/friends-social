import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewSendTextActionCreator } from '../../redux/state';

import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let newMessageText = state.newMessageText;

  let dialogsElements = state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = state.messages.map((m) => <Message message={m.message} />);

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onSendChange = (e) => {
    let messageText = e.target.value;
    let action = updateNewSendTextActionCreator(messageText);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>{messagesElements}</ul>
      <div className="">
        <h3>Messages</h3>
        <div className="">
          <textarea onChange={onSendChange} value={newMessageText}></textarea>
        </div>
        <div className="">
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
