import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
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
import store from "./redux/redux-store";

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

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		</BrowserRouter>
	)
}

export default SamuraiJSApp;
