import './App.css';
import { Route } from 'react-router-dom';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/New';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              store={props.store}
              // dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
