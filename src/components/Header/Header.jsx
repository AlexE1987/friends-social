import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/f6/9b/f1/f69bf1f975891acb276f4031013cbcae.jpg"
        alt="Logo"
        width="500"
      />
    </header>
  );
};

export default Header;
