import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "./constants";

const initialState = {
  data: {},
  loading: false,
  success: false,
  error: "",
};
const updateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        data: action.payload.info,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        success: true,
        loading: false,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        data: {},
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};
export default updateProfileReducer;
