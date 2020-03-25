import{FETCH_GITHUB_INFO,CLEAR_DATA, LOADING} from '../actions/constants'
const initialState={
    data:{},
    loading:false
}
export default function (state=initialState,action){
    switch(action.type){
        case LOADING:
            return{
                ...state,
                data:{},
                loading:true
            }
        case FETCH_GITHUB_INFO:
             return{
                 ...state,
                 loading:false,
                 data:action.payload
             };
        case CLEAR_DATA:
            return{
                ...state,
                data:{}
            }
        default:
            return state;
    }
}