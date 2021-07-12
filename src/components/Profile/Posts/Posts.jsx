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
        <Post message="hi" likeCounts="15" />
        <Post message="first post" likeCounts="20" />
      </div>
    </div>
  );
};

export default Posts;
