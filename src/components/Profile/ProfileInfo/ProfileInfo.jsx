import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className="">
			<div>
				<img src="https://s1.1zoom.ru/big0/405/USA_Houses_Rivers_489602.jpg" alt="Content"/>
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt=""/>
				ava + desc
				<div>
				<span>{props.profile.aboutMe}</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
