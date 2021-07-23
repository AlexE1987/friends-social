import React from "react";
import {connect} from "react-redux";
import axios from "axios";
// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPostsContainer from './MyPosts/MyPostsContainer';
// import s from './Profile.module.css';
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

    render() {
      return (
        <div className="content">
          <Profile {...this.props} profile={this.props.profile}/>
        </div>
      );
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
