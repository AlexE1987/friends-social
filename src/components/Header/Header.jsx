import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://i.pinimg.com/originals/f6/9b/f1/f69bf1f975891acb276f4031013cbcae.jpg" alt="Logo" width="500"/>
			<div className={s.loginBlock}>
				{props.isAuth ?
					<div>{props.login} - <button onClick={props.logout}>Log out</button></div>
					: <NavLink to={'/login'}>Login</NavLink>}

			</div>
		</header>
	);
};

export default Header;
