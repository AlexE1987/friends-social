import Post from './Post/Post';
import s from './Posts.module.css';
const Posts = () => {
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
      <div className={s.posts}>
        <Post message="hi" likeCounts="15" />
        <Post message="first post" likeCounts="20" />
      </div>
    </div>
  );
};

export default Posts;
