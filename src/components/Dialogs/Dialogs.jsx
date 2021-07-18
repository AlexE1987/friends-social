import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageText = state.newMessageText;

  let dialogsElements = state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = state.messages.map((m) => <Message message={m.message} />);

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>{messagesElements}</ul>
      <div className="">
        <h3>Messages</h3>
        <div className="">
          <textarea onChange={onNewMessageChange} value={newMessageText}></textarea>
        </div>
        <div className="">
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
