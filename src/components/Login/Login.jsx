import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required, maxLength40} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

import style from '../common/FormsControl/FormsControl.module.css'

const LoginForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field name={'email'} placeholder={'Email'} component={Input} validate={[required, maxLength40]}/>
				</div>
				<div>
					<Field type={'password'} name={'password'} placeholder={'Password'} component={Input}
								 validate={[required, maxLength40]}/>
				</div>
				<div>
					<Field type={'checkbox'} name={'rememberMe'} component={Input}/> Remember
					me
				</div>
				{props.error && <div className={style.formSummaryError}>
					{props.error}
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