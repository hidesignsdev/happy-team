import { FETCH_SUCCESS, CLEAR_DATA, LOADING, FETCH_ERROR } from '../actions/constants'
const initialState = {
    data: {},
    loading: false,
    error:false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            };
        case FETCH_ERROR:
            return {
                ...state,
                data:{},
                loading: false,
                error: true
            }
        case CLEAR_DATA:
            return {
                ...state,
                data: {}
            }
        default:
            return state;
    }
}