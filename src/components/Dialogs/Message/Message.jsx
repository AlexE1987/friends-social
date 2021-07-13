import s from '../Dialogs.module.css';

const Message = (props) => {
  return <li className={s.dialog}>{props.message}</li>;
};

export default Message;
