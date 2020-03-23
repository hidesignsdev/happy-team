import { FETCH_GITHUB_INFO, FETCH_GITHUB_INFO_SUCCESS, FETCH_GITHUB_INFO_FAILURE } from '../actions/constants'
const initialState = {
    userData: {},
    loading: false,
    error: false
}
export const fetchGithubReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GITHUB_INFO:
            return {
                ...state,
                userData: {},
                loading: true,
                error: false
            }
        case FETCH_GITHUB_INFO_SUCCESS: {
            return {
                ...state,
                loading: false,
                userData: action.payload,
                error: false
            }
        }
        case FETCH_GITHUB_INFO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default:
            return state;
    }
}
export default fetchGithubReducer