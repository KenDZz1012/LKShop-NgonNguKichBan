import { get, post, put, del } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_BUNDLE_ENDPOINT}`

const getListBundle = filter => {
    return get(`${BASE_API_URL}/GetListBundle`, filter)
}

const getBundleById = id => {
    return get(`${BASE_API_URL}/GetBundleById/${id}`)
}

const createBundle = userCreate => {
    return post(`${BASE_API_URL}/createBundle`, userCreate)
}

const updateBundle = (UserId, userUpdate) => {
    return put(`${BASE_API_URL}/updateBundle/${UserId}`, userUpdate)
}

const deleteBundle = id => {
    return del(`${BASE_API_URL}/deleteBundle/${id}`)
}
export {
    getListBundle,
    getBundleById,
    createBundle,
    updateBundle,
    deleteBundle
}