import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
	posts: [
		{id: 1, message: 'Hi', likeCounts: 1},
		{id: 2, message: 'Bye', likeCounts: 22},
		{id: 3, message: 'Yes', likeCounts: 12},
		{id: 4, message: 'Ok', likeCounts: 133},
	],
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {id: 0, message: action.newPostText, likeCounts: 21};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}

		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId)
			.then(response => {
				dispatch(setUserProfile(response.data));
			})
	}
};

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then(response => {
				dispatch(setStatus(response.data));
			})
	}
};

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			})
	}
};


export default profileReducer;
