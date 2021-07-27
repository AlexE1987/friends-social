import React from 'react';
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';

const Dialogs = (props) => {
	let state = props.dialogsPage;
	// let newMessageText = state.newMessageText;

	let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>);
	let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message}/>);

	let addNewMessage = (value) => {
		props.sendMessage(value.newMessageText);
	}
	if (!props.isAuth) return <Redirect to="/login"/>
	return (
		<div className={s.dialogs}>
			<ul className={s.dialogsItems}>{dialogsElements}</ul>
			<ul className={s.messages}>{messagesElements}</ul>
			<AddMessageReduxForm onSubmit={addNewMessage}/>
		</div>
	);
};

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className="">
				<Field component='textarea' name='newMessageText' placeholder='Enter your message'/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
