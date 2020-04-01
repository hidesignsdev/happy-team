import { FETCH_SUCCESS, REQUEST_API_DATA, CLEAR_DATA, LOADING, FETCH_ERROR } from './constants'

export const requestApiData = (username) => {
    return {
        type: REQUEST_API_DATA,
        payload: { username }
    }
}
export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    payload: data
})
export const loading = () => ({
    type: LOADING
})
export const fetchError = () => ({
    type: FETCH_ERROR
})
export const clearData = () => ({
    type: CLEAR_DATA
})
