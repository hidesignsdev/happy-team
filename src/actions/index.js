import {FETCH_GITHUB_INFO} from './constants'
export const fetchGithubInfo=(data)=>({
    type:FETCH_GITHUB_INFO,
    payload:data
})

export const fetchGithubAcc=(username)=>dispatch =>{
    fetch(
        `https://api.github.com/users/${username}` 
        )
        .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
    .then(data=>{
        dispatch(fetchGithubInfo(data));
        
    })
    .catch(error=>{});
    
}