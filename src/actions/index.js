import { FETCH_GITHUB_INFO, FETCH_GITHUB_INFO_SUCCESS, FETCH_GITHUB_INFO_FAILURE, CLEAR_INFO } from './constants'
import store from '../redux-thunk/store'

export const getGithubInfo = () => ({
    type: FETCH_GITHUB_INFO
})
export const fetchGithubInfoSuccess = data => {
    return {
        type: FETCH_GITHUB_INFO_SUCCESS,
        payload: data,
    }
}
export const fetchGithubInfoFailure = () => {
    return {
        type: FETCH_GITHUB_INFO_FAILURE
    }
}
export const fetchGithubInfo = username => {
    const user = username.replace(/\s/g, "");
    store.dispatch(getGithubInfo());
    return (dispatch) => {
        return fetch(`https://api.github.com/users/${user}`)
            .then(payload => payload.json())
            .then(payload => {
                if (payload.message === "Not Found") {
                    throw new Error("No such user found!!");
                } else dispatch(fetchGithubInfoSuccess(payload));
            })
            .catch(err => dispatch(fetchGithubInfoFailure()));
    }
}
export const clearInfo = () => {
    return {
        type: CLEAR_INFO
    }
}
