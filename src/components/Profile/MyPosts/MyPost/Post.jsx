import s from './MyPost.module.css';
const MyPost = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://geekvibesnation.com/wp-content/uploads/2021/03/avatar-2-story.jpg"
        alt="Avatar"
      />
      {props.message}
      <div>
        <span>like</span> {props.likeCounts}
      </div>
    </div>
  );
};

export default MyPost;
