import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components/News/New';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar
      // state={props.store}
      />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
