import * as axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "41823454-5c69-4ffd-9e94-f07cc8d73f73" }
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const auth = () => {
    return instance.get(`auth/me`)
        .then(response => response.data)
}

export const unfollow = (id) => {
    return instance.delete(`follow/${id}`)
}

export const follow = (id) => {
    return instance.post(`follow/${id}`)
}
