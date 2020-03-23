import{FETCH_GITHUB_INFO} from '../actions/constants'
const initialState={
    data:{},
    loading:true
}
export default function (state=initialState,action){
    switch(action.type){
        case FETCH_GITHUB_INFO:
             return{
                 ...state,
                 loading:false,
                 data:action.payload
             };
        default:
            return state;
    }
}