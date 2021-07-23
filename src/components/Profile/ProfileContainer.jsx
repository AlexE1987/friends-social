import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({profile: state.profilePage.profile,})

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
