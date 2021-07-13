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
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        <Dialog id="1" name="Alex" />
        <Dialog id="2" name="Alice" />
        <Dialog id="3" name="Petr" />
        <Dialog id="4" name="Foma" />
      </ul>
      <ul className={s.messages}>
        <Message message="Hi" />
        <Message message="Bye" />
        <Message message="Yes" />
        <Message message="Ok" />
      </ul>
    </div>
  );
};

export default Dialogs;
