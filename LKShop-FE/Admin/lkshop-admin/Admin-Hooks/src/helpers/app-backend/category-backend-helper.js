import { get, post, put, del } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_CATEGORY_ENDPOINT}`

const getListCategory = filter => {
    return get(`${BASE_API_URL}/GetAllCategory`, filter)
}

const getCategoryById = id => {
    return get(`${BASE_API_URL}/GetCategoryById/${id}`)
}

const createCategory = userCreate => {
    return post(`${BASE_API_URL}/createCategory`, userCreate)
}

const updateCategory = (UserId, userUpdate) => {
    return put(`${BASE_API_URL}/updateCategory/${UserId}`, userUpdate)
}

const deleteCategory = id => {
    return del(`${BASE_API_URL}/deleteCategory/${id}`)
}
export {
    getListCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}