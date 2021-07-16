import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewSendTextActionCreator } from '../../redux/state';

import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />);

  // let messageArea = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
    // alert(messageText);
  };

  let onSendChange = (e) => {
    // let messageText = messageArea.current.value;
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
          <textarea
            // ref={messageArea}
            onChange={onSendChange}
            value={props.dialogsPage.newMessageText}></textarea>
        </div>
        <div className="">
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
