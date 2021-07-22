// import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/userPhoto.ico';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    // debugger;
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={props.currentPage === p ? styles.selectedPage : styles.pageNumber}
                onClick={(e) => {
                  props.onPageChanged(p);
                }}>
                {p}
              </span>
            );
          })}
        </div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className="">
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={styles.userPhoto}
                />
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
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
}

export default Users;
