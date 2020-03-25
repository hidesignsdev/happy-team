import{FETCH_GITHUB_INFO,CLEAR_DATA, LOADING, FETCH_ERROR} from '../actions/constants'
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
                loading:true,
                error:false
            }
        case FETCH_GITHUB_INFO:
             return{
                 ...state,
                 loading:false,
                 error:false,
                 data:action.payload
             };
        case FETCH_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
        case CLEAR_DATA:
            return{
                ...state,
                data:{}
            }
        default:
            return state;
    }
}