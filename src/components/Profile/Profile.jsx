import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

import s from './Profile.module.css';
const Profile = () => {
  // debugger;
  return (
    <div className="content">
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
