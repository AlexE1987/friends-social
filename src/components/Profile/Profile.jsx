import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';
const Profile = () => {
  return (
    <div className="content">
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
