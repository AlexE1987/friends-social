import s from './Profile.module.css';
const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://s1.1zoom.ru/big0/405/USA_Houses_Rivers_489602.jpg" alt="Content" />
      </div>
      <div>ava + desc</div>
      <div>
        My posts
        <div>New posts</div>
        <div className={s.posts}>
          <div className={`${s.item} ${s.active}`}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
