import { get, post, put, del, postWithFormData, putWithFormData } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_CELEBRITY_ENDPOINT}`

const getListCelebrity = filter => {
    return get(`${BASE_API_URL}/GetAllCelebrity`, filter)
}

const getCelebrityById = id => {
    return get(`${BASE_API_URL}/GetCelebrityById/${id}`)
}

const createCelebrity = userCreate => {
    return postWithFormData(`${BASE_API_URL}/createCelebrity`, userCreate)
}

const updateCelebrity = (UserId, userUpdate) => {
    return putWithFormData(`${BASE_API_URL}/updateCelebrity/${UserId}`, userUpdate)
}

const deleteCelebrity= id => {
    return del(`${BASE_API_URL}/deleteCelebrity/${id}`)
}
export {
    getListCelebrity,
    getCelebrityById,
    createCelebrity,
    updateCelebrity,
    deleteCelebrity
}