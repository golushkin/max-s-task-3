import axios from 'axios';

export const USER_REQ_SUCCES = "USER_REQ_SUCCES"
export const USER_REQ_FAIL = "USER_REQ_FAIL"
export const USER_REQ_RESET = "USER_REQ_RESET"

export const USER_REQ_TOKEN = "USER_REQ_TOKEN"
export const USER_REQ_TOKEN_SUCCESS = "USER_REQ_TOKEN_SUCCESS"
export const USER_REQ_TOKEN_FAIL = "USER_REQ_TOKEN_FAIL"
import { PATH } from './News';

export function getUser() {
    return dispatch => {
        dispatch({type:USER_REQ_RESET});
        const Google_Auth = window.gapi.auth2.getAuthInstance();
        Google_Auth.signIn()
            .then((user) => {
                const my_user = {
                    id: user.getBasicProfile().getId(),
                    name: user.getBasicProfile().getName(),
                    img: user.getBasicProfile().getImageUrl(),
                    google_token: user.getAuthResponse().id_token,
                }

                localStorage.setItem('user',JSON.stringify(my_user));
                dispatch({
                    type:USER_REQ_SUCCES,
                    payload: my_user
                });
                dispatch(getServerToken(my_user.google_token));
            })
            .catch((err) => dispatch({type: USER_REQ_FAIL, payload:"Ошибка: авторизация не удалась"}));
    }
}

export function signOut() {
    return dispatch => {
        const Google_Auth = window.gapi.auth2.getAuthInstance();
        Google_Auth.signOut()
            .then(() => dispatch({type:USER_REQ_RESET}))
            .catch(() => dispatch({type: USER_REQ_FAIL, error: true}));
    }
}

export function getServerToken(token) {
    return dispatch => {
        dispatch({type:USER_REQ_TOKEN});
        axios.post(PATH+'/auth/google',{token})
            .then(r=>{
                dispatch({type:USER_REQ_TOKEN_SUCCESS,payload:r.data.token})
            })
            .catch(()=>dispatch({type:USER_REQ_TOKEN_FAIL, payload:"Ошибка: не удалось получить токен"}))
    }
}

