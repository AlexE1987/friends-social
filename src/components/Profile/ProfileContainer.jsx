import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId)
	}

	render() {

		return (
			<div className="content">
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


// let mapStateToPropsForRedirect = (state) => ({
// 	isAuth: state.auth.isAuth
// });
//
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
