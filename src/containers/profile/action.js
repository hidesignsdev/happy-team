import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "./constants";

export const updateProfileRequest = (data) => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    payload: data 
  };
};

export const updateProfileSuccess = (data) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data
  };
};

export const updateProfileFailure = (error) => {
  return {
    type: UPDATE_PROFILE_FAILURE,
    payload: error
  };
};
