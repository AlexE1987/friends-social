import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;
