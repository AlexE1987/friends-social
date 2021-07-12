import s from './Post.module.css';
const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://geekvibesnation.com/wp-content/uploads/2021/03/avatar-2-story.jpg"
        alt="Avatar"
      />
      post 2
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
