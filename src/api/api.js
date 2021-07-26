import axios from "axios";
import {setAuthUserData} from "../redux/auth-reducer";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "875b7698-4b83-4666-94f4-7020e57d8b63",
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 5) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data
			})
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => {
				return response.data
			})
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => {
				return response.data
			})
	},
	getProfile(userId) {
		return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
			// .then(response => {
			// 	if (response.data.resultCode === 0) {
			// 		let {id, login, email} = response.data.data;
			// 		this.props.setAuthUserData(id, login, email)
			// 	}
			//
			// })
	}

}
