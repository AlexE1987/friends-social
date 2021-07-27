import {Field, reduxForm} from "redux-form";
// import handleSubmit from "redux-form/lib/handleSubmit";

const LoginForm = (props) => {

	return (
		<div>
			<form action="" onSubmit={props.handleSubmit}>


				<div>
					<Field type="text" name={'Login'} placeholder={'Login'} component={'input'}/>
				</div>
				<div>
					<Field type="text" name={'Password'} placeholder={'Password'} component={'input'}/>
				</div>
				<div>
					<Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
				</div>
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
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

export default Login;