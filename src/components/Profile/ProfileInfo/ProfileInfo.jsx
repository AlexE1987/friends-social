import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userPhoto.ico'
import Profile from "../Profile";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

	let [editMode, setEditMode] = useState(false);
	// let [status, setStatus] = useState(status);
	if (!profile) {
		return <Preloader/>
	}
	const onMainPhotoSelect = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then(
			() => {
				setEditMode(false);
			}
		)
	}
	return (
		<div className="">
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} alt="Avatar" className={s.namePhoto}/>
				{isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
				{editMode
					? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
					: <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
			</div>
		</div>
	);
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return (
		<div>
			{isOwner && <div>
				<button onClick={goToEditMode}>edit</button>
			</div>}
			<div>
				<b>Full name</b>: {profile.fullName}
			</div>
			<div>
				<b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			<div>
				<b>My professional skills</b>: {profile.lookingForAJobDescription}
			</div>
			<div>
				<b>About me</b>: {profile.aboutMe}
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
			})
			}
			</div>
		</div>
	)
}


const Contact = ({contactTitle, contactValue}) => {
	return <div className={s.contact}><b>{contactTitle}</b><b>{contactValue}</b></div>
}

export default ProfileInfo;
