import React from 'react';

import MyPost from './MyPost/Post';

import s from './MyPosts.module.css';

import {
  addActionCreatorPost,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <MyPost message={p.message} likeCounts={p.likeCounts} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addActionCreatorPost());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div className="">
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}></textarea>
        </div>
        <div className="">
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
