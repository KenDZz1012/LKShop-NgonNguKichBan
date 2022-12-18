import { get, post, put, del, postWithFormData, putWithFormData } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_TVEPISODE_ENDPOINT}`

const getListTVEpisode = id => {
    return get(`${BASE_API_URL}/getListTVEpisode/${id}`)
}

const getTVEpisodeById = id => {
    return get(`${BASE_API_URL}/GetTVEpisodeById/${id}`)
}

const createTVEpisode = userCreate => {
    return postWithFormData(`${BASE_API_URL}/CreateTVEpisode`, userCreate)
}

const updateTVEpisode = (UserId, userUpdate) => {
    return putWithFormData(`${BASE_API_URL}/UpdateTVEpisode/${UserId}`, userUpdate)
}

const deleteTVEpisode= id => {
    return del(`${BASE_API_URL}/DeleteTVEpisode/${id}`)
}
export {
    getListTVEpisode,
    getTVEpisodeById,
    createTVEpisode,
    updateTVEpisode,
    deleteTVEpisode
}