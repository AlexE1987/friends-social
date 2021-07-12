import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Dialogs from './components/Dialogs/Dialogs copy';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/New';
import Music from './components/Music/Music';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
