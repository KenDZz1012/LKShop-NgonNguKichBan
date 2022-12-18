import { get, post, put, del, postWithFormData, putWithFormData } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_TVSEASON_ENDPOINT}`

const getListTVSeason = filter => {
    return get(`${BASE_API_URL}/getListTVSeason`, filter)
}

const getTVSeasonById = id => {
    return get(`${BASE_API_URL}/GetTVSeasonById/${id}`)
}

const createTVSeason = userCreate => {
    return postWithFormData(`${BASE_API_URL}/CreateTVSeason`, userCreate)
}

const updateTVSeason = (UserId, userUpdate) => {
    return putWithFormData(`${BASE_API_URL}/UpdateTVSeason/${UserId}`, userUpdate)
}

const deleteTVSeason= id => {
    return del(`${BASE_API_URL}/DeleteTVSeason/${id}`)
}
export {
    getListTVSeason,
    getTVSeasonById,
    createTVSeason,
    updateTVSeason,
    deleteTVSeason
}