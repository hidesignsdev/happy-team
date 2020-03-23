import { FETCH_GITHUB_INFO, FETCH_GITHUB_INFO_SUCCESS, FETCH_GITHUB_INFO_FAILURE } from '../actions/constants'
const initialState = {
    userData: {},
    loading: false,
    error: false
}
export const fetchGithubReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GITHUB_INFO:
            return Object.assign({}, state,{
                
                userData: {},
                loading: true,
                error:false
            })
        case FETCH_GITHUB_INFO_SUCCESS: {
            return Object.assign({}, state,{
               
                loading: false,
                userData: action.data,
                error:false
            })
        }
        case FETCH_GITHUB_INFO_FAILURE: {
            return Object.assign({}, state,{
                
                loading: false,
                error: true
            })
        }
        default:
            return state;
    }
}
export default fetchGithubReducer