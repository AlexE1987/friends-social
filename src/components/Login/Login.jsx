import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required, maxLength40} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

import style from '../common/FormsControl/FormsControl.module.css'

const LoginForm = ({handleSubmit, error}) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				{createField('email', 'Email', Input, [required, maxLength40])}
				<div>
					{createField('password', 'Password', Input, [required, maxLength40], {type: 'password'})}
				</div>
				<div>
					{createField('rememberMe', null, Input, [], {type: 'checkbox'}, 'Remember me')}
				</div>
				{error && <div className={style.formSummaryError}>
					{error}
				</div>}
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);