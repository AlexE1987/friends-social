import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);
  let messageArea = React.createRef();
  let sendMessage = () => {
    let messageText = messageArea.current.value;
    alert(messageText);
  };

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>{messagesElements}</ul>
      <div className="">
        <h3>Messages</h3>
        <div className="">
          <textarea ref={messageArea}></textarea>
        </div>
        <div className="">
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
