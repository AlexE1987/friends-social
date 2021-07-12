import Posts from './Posts/Posts';
import s from './Profile.module.css';
const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://s1.1zoom.ru/big0/405/USA_Houses_Rivers_489602.jpg" alt="Content" />
      </div>
      <div>ava + desc</div>
      <Posts />
    </div>
  );
};

export default Profile;
