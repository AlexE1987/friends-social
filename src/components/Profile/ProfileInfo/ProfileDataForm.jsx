import {createField, Input, Textarea} from "../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControl/FormsControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button onClick={() => {
				}}>save
				</button>
				{error && <div className={style.formSummaryError}>
					{error}
				</div>}
			</div>
			<div>
				<b>Full name</b>: {createField('fullName', 'Full name', Input, [])}
			</div>
			<div>
				<b>Looking for a job</b>: {createField('lookingForAJob', '', Input, [], {type: 'checkbox'})}
			</div>
			<div>
				<b>My professional
					skills</b>: {createField('lookingForAJobDescription', 'My professional skills', Textarea, [],)}
			</div>

			<div>
				<b>About me</b>: {createField('aboutMe', 'About me', Textarea, [],)}
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
				return <div key={key} className={s.contact}>
					<b>>{key} : {createField('contacts.' + key, key, Input, [],)}</b>
				</div>
			})
			}
			</div>
		</form>
	)
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;