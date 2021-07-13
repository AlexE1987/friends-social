import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        <li className={`${s.dialog} ${s.active}`}>Alex</li>
        <li className={s.dialog}>Alice</li>
        <li className={s.dialog}>Petr</li>
        <li className={s.dialog}>Foma</li>
      </ul>
      <ul className={s.messages}>
        <li className={s.message}>HI</li>
        <li className={s.message}>Bye</li>
        <li className={s.message}>OK</li>
      </ul>
    </div>
  );
};

export default Dialogs;
