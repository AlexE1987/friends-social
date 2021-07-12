import s from './Navbar.module.css';
const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#">Profile</a>
      </div>
    </nav>
  );
};

export default NavBar;
