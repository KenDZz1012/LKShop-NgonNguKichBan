import { get, post, put, del, postWithFormData, putWithFormData } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_CLIENT_ENDPOINT}`

const getListClient = filter => {
    return get(`${BASE_API_URL}/GetAllClient`, filter)
}

const getClientById = id => {
    return get(`${BASE_API_URL}/GetClientById/${id}`)
}

const createClient = (ClientCreate) => {
    return postWithFormData(`${BASE_API_URL}/createClient`, ClientCreate)
}

const updateClient = (id,ClientUpdate) => {
    return putWithFormData(`${BASE_API_URL}/updateClient/${id}`, ClientUpdate)
}

const deleteClient = id => {
    return del(`${BASE_API_URL}/deleteClient/${id}`)
}
export {
    getListClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}