import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

// import { dialogs, messages } from '../../store/Store';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = props.messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>{messagesElements}</ul>
    </div>
  );
};

export default Dialogs;
