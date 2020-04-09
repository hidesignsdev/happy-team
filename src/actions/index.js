export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export const logIn = (account) => {
    return {
        type: LOGIN,
        payload: account
    }
}
export const logOut = () => {
    return {
        type: LOGOUT
    }
}
export const signUp = (newAccount) => {
    return {
        type: SIGNUP,
        payload: newAccount
    }
}