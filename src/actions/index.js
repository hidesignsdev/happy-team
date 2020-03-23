import { FETCH_GITHUB_INFO, FETCH_GITHUB_INFO_SUCCESS, FETCH_GITHUB_INFO_FAILURE } from './constants'
import store from '../redux-thunk/store'

export const getGithubInfo = () => ({
    type: FETCH_GITHUB_INFO
})

export const fetchGithubInfoSuccess = post => {
    return {
        type: FETCH_GITHUB_INFO_SUCCESS,
        data: post,
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
    return function (dispatch) {
        return fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {

                    throw new Error("No such user found!!");
                } else dispatch(fetchGithubInfoSuccess(data));
            })
            .catch(err => dispatch(fetchGithubInfoFailure()));

    }
}
