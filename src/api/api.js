import axios from "axios";

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
	followUser(id) {
		return instance.delete(`follow/${id}`,)
			.then(response => {
				return response.data
			})
	},
	unfollowUser(id) {
		return instance.post(`follow/${id}`,)
			.then(response => {
				return response.data
			})
	}
}

