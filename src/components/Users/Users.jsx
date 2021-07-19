import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
  // debugger;
  if (props.users.length === 0) {
    props.setUsers({
      users: [
        {
          id: 1,
          photoUrl: 'https://i.pinimg.com/originals/1b/fc/02/1bfc0220938a4050c06ad363dc28657f.png',
          followed: true,
          fullName: 'Alex',
          status: 'Winner',
          location: { city: 'Saratov', country: 'Russia' },
        },
        {
          id: 2,
          photoUrl: 'https://i.pinimg.com/originals/1b/fc/02/1bfc0220938a4050c06ad363dc28657f.png',
          followed: false,
          fullName: 'Max',
          status: 'Winner',
          location: { city: 'Minsk', country: 'Belarus' },
        },
        {
          id: 3,
          photoUrl: 'https://i.pinimg.com/originals/1b/fc/02/1bfc0220938a4050c06ad363dc28657f.png',
          followed: true,
          fullName: 'Den',
          status: 'Winner',
          location: { city: 'Kiev', country: 'Ukraine' },
        },
      ],
    });
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className="">
              <img src={u.photoUrl} alt="" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}>
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
