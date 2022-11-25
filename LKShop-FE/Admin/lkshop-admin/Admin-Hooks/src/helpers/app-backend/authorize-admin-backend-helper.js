import { get, post, put, del } from '../api_helper'

const BASE_API_URL = `${process.env.REACT_APP_AUTH_ADMIN_ENDPOINT}`

const adminLogin = filter => {
    return post(`${BASE_API_URL}/Login`,filter)
}

export {
    adminLogin
}