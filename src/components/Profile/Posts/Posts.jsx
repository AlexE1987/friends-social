import React from 'react';

import Post from './Post/Post';

import s from './Posts.module.css';
const Posts = (props) => {
  let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    let test = newPostElement.current.value;
    alert(test);
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

export default Posts;
