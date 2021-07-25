// import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/userPhoto.ico';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


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
                  <NavLink to={`/profile/${u.id}`}>
                <img
									src={u.photos.small != null ? u.photos.small : userPhoto}
									alt=""
									className={styles.userPhoto}
								/>
                  </NavLink>
              </div>
              <div>
                {u.followed ? (
									<button
										disabled={props.followingInProgress.some(id => id === u.id)}
										onClick={() => {
											debugger
											props.toggleFollowingProgress(true, u.id)
											// axios
											// 	.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
											// 		{
											// 			withCredentials: true,
											// 			headers: {
											// 				"API-KEY": "875b7698-4b83-4666-94f4-7020e57d8b63",
											// 			}
											// 		})
											usersAPI.followUser(u.id)
												.then(data => {
													if (data.resultCode === 0) {
														props.unfollow(u.id);
													}
													props.toggleFollowingProgress(false, u.id)
												});
										}}>
										Unfollow
									</button>
								) : (
									<button
										disabled={props.followingInProgress.some(id => id === u.id)}
										onClick={() => {
											// debugger
											props.toggleFollowingProgress(true, u.id)
											// axios
											// 	.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
											// 		{
											// 			withCredentials: true,
											// 			headers: {
											// 				"API-KEY": "875b7698-4b83-4666-94f4-7020e57d8b63",
											// 			}
											// 		})
											usersAPI.unfollowUser(u.id)
												.then(data => {
													if (data.resultCode === 0) {
														props.follow(u.id);
													}
													props.toggleFollowingProgress(false, u.id)
												});
										}}>

										Follow
									</button>
								)}
              </div>
            </span>
					<span>
              <span>
                <div>{u.name}</div>
                <div>{u.id}</div>
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
