import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT } from "./constants";

export const logIn = (data) => {
    return {
        type: LOGIN_REQUESTING,
        payload: data
    };
};
export const logInSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
};

export const logInFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
};
export const logOut = () => {
    return {
        type: LOGOUT
    }
}
