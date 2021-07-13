import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <li className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
};

const Message = (props) => {
  return <li className={s.dialog}>{props.message}</li>;
};

const Dialogs = () => {
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

  let dialogsElements = dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>{messagesElements}</ul>
    </div>
  );
};

export default Dialogs;
