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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
