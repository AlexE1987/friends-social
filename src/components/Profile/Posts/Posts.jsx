import Post from './Post/Post';
import s from './Posts.module.css';
const Posts = () => {
  const posts = [
    { id: 1, message: 'Hi', likeCounts: 1 },
    { id: 2, message: 'Bye', likeCounts: 22 },
    { id: 3, message: 'Yes', likeCounts: 12 },
    { id: 4, message: 'Ok', likeCounts: 133 },
  ];

  let postsElement = posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);
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
