import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => (
		<Post key={p.id} message={p.message} likesCount={p.likesCount}/>
	));


	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<AddPostReduxForm onSubmit={onAddPost}/>

			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};

const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name='newPostText' component='textarea'/>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm);

export default MyPosts;
