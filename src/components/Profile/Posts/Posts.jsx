import Post from './Post/Post';

import s from './Posts.module.css';
const Posts = (props) => {
  let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div className="">
          <textarea></textarea>
        </div>
        <div className="">
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default Posts;
