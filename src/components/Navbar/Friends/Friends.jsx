import s from '../Navbar.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendsElements = props.friends.map((f) => <Friend id={f.id} name={f.name} />);
  return (
    <div className="">
      <h1>Friends</h1>
      <ul className="">{friendsElements}</ul>
    </div>
  );
};

export default Friends;
