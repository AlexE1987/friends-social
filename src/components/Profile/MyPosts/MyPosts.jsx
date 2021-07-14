import React from 'react';

import MyPost from './MyPost/Post';

import s from './MyPosts.module.css';
const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <MyPost message={p.message} likeCounts={p.likeCounts} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div className="">
          <textarea ref={newPostElement}></textarea>
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
