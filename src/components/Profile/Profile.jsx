import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';
const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <Posts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
