import Post from './Post/Post';
import s from './Posts.module.css';
const Posts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="hi" />
        <Post message="first post" />
      </div>
    </div>
  );
};

export default Posts;
