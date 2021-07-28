import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className="">
			{/*<div>*/}
			{/*	<img src="https://cdn.pixabay.com/photo/2015/05/25/06/33/dawn-782773__480.jpg" alt="Content"/>*/}
			{/*</div>*/}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt=""/>
				ava + desc
				<div>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
				</div>
			</div>
		</div>
	);
};


export default ProfileInfo;
