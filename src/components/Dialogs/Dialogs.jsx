import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialog = (props) => {
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
  const dialogsData = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Petr' },
    { id: 4, name: 'Foma' },
  ];

  const messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Bye' },
    { id: 3, message: 'Yes' },
    { id: 4, message: 'Ok' },
  ];

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
        <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
        <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
      </ul>
      <ul className={s.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
      </ul>
    </div>
  );
};

export default Dialogs;
