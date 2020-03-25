import {FETCH_GITHUB_INFO, CLEAR_DATA, LOADING} from './constants'
export const fetchGithubInfo=(data)=>({
    type:FETCH_GITHUB_INFO,
    payload:data
})
export const loading =()=>({
    type:LOADING
})

export const fetchGithubAcc=(username)=>dispatch =>{
    dispatch(loading());
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
export const clearData=()=>({
    type:CLEAR_DATA
})