import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import NavBar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/New';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<div className="app-wrapper">
				<HeaderContainer/>
				<NavBar
					// state={props.store}
				/>
				<div className="app-wrapper-content">
					<Route path="/dialogs" render={() => <DialogsContainer/>}/>
					<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
					<Route path="/users" render={() => <UsersContainer/>}/>
					<Route path="/login" render={() => <Login/>}/>
					<Route path="/news" component={News}/>
					<Route path="/music" component={Music}/>
					<Route path="/settings" component={Settings}/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

