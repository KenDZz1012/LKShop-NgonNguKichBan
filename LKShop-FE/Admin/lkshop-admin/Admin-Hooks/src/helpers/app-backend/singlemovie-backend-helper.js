import { get, post, put, del, postWithFormData, putWithFormData } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_SINGLE_MOVIE_ENDPOINT}`

const getListSingleMovie = filter => {
    return get(`${BASE_API_URL}/getListSingleMovie`, filter)
}

const getSingleMovieById = id => {
    return get(`${BASE_API_URL}/GetSingleMovieById/${id}`)
}

const createSingleMovie = userCreate => {
    return postWithFormData(`${BASE_API_URL}/createSingleMovie`, userCreate)
}

const updateSingleMovie = (UserId, userUpdate) => {
    return putWithFormData(`${BASE_API_URL}/updateSingleMovie/${UserId}`, userUpdate)
}

const deleteSingleMovie= id => {
    return del(`${BASE_API_URL}/deleteSingleMovie/${id}`)
}
export {
    getListSingleMovie,
    getSingleMovieById,
    createSingleMovie,
    updateSingleMovie,
    deleteSingleMovie
}