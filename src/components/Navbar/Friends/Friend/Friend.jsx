import s from '../../Navbar.module.css';

const Friend = (props) => {
  return (
    <li className="" id={props.id}>
      <div className={s.imgTest}>
        <img src="" alt="" />
      </div>
      {props.name}
    </li>
  );
};

export default Friend;
