import { get, post, put, del, postWithFormData, putWithFormData } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_MOVIE_ENDPOINT}`

const getListMovie = filter => {
    return get(`${BASE_API_URL}/GetAllMovie`, filter)
}

const getMovieById = id => {
    return get(`${BASE_API_URL}/GetMovieById/${id}`)
}

const createMovie = userCreate => {
    return post(`${BASE_API_URL}/CreateMovie`, userCreate)
}

const updateMovie = (UserId, userUpdate) => {
    return put(`${BASE_API_URL}/UpdateMovie/${UserId}`, userUpdate)
}

const deleteMovie= id => {
    return del(`${BASE_API_URL}/DeleteMovie/${id}`)
}
export {
    getListMovie,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}