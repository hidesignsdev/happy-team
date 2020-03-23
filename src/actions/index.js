import {FETCH_GITHUB_INFO} from './constants'
export const fetchGithubInfo=(data)=>({
    type:FETCH_GITHUB_INFO,
    payload:data
})
