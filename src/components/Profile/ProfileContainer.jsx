import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {compose} from "redux";

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login')
			}

		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	render() {

		return (
			<div className="content">
				<Profile {...this.props}
								 isOwner={!this.props.match.params.userId}
								 profile={this.props.profile}
								 status={this.props.status}
								 updateStatus={this.props.updateStatus}
								 savePhoto={this.props.savePhoto}
				/>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
});


export default compose(
	connect(mapStateToProps,
		{getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
)(ProfileContainer)
