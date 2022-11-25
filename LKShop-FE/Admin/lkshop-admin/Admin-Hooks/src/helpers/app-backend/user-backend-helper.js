import { get, post, put, del } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_USER_ENDPOINT}`

const getListUser = filter => {
    return get(`${BASE_API_URL}/GetAllUser`,filter)
}

export {
    getListUser
}