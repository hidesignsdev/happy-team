export const FETCH_GITHUB_INFO = 'FETCH_GITHUB_INFO'
export const FETCH_GITHUB_INFO_SUCCESS = 'FETCH_GITHUB_INFO_SUCCESS'
export const FETCH_GITHUB_INFO_FAILURE = 'FETCH_GITHUB_INFO_FAILURE'
export const CLEAR_INFO = 'CLEAR_INFO'

export const getGithubInfo = username => ({
    type: FETCH_GITHUB_INFO,
    payload: { username }
})
export const getGithubInfoSuccess = data => {
    return {
        type: FETCH_GITHUB_INFO_SUCCESS,
        payload: { data }
    }
}
export const getGithubInfoFailure = () => {
    return {
        type: FETCH_GITHUB_INFO_FAILURE
    }
}
export const clearInfo = () => {
    return {
        type: CLEAR_INFO
    }
}
