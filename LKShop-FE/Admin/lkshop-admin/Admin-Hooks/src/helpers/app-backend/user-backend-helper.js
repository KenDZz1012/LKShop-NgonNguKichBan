import { get, post, put, del } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_USER_ENDPOINT}`

const getListUser = filter => {
    return get(`${BASE_API_URL}/GetAllUser`, filter)
}

const getUserById = id => {
    return get(`${BASE_API_URL}/GetUserById/${id}`)
}

const createUser = userCreate => {
    return post(`${BASE_API_URL}/createUser`, userCreate)
}

const updateUser = (UserId, userUpdate) => {
    return put(`${BASE_API_URL}/updateUser/${UserId}`, userUpdate)
}

const deleteUser = id => {
    return del(`${BASE_API_URL}/deleteUser/${id}`)
}
export {
    getListUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}