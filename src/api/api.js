import * as axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "41823454-5c69-4ffd-9e94-f07cc8d73f73" }
})


export const userApi = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    
    unfollow: (id) => {
        return instance.delete(`follow/${id}`)
    },
    
    follow: (id) => {
        
        return instance.post(`follow/${id}`)
    },
}
export const profileApi = {
    getUser: (id) => {
        return instance.get(`profile/${id}`)
    },
    getStatus: (id) => {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status})
    }
}
export const authApi = {
    me: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

