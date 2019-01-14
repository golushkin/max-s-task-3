import { USER_REQ_FAIL, USER_REQ_SUCCES, USER_REQ_RESET, USER_REQ_TOKEN_FAIL, USER_REQ_TOKEN_SUCCESS, USER_REQ_TOKEN  } from '../actions/User';

const initialState = {
    name:"",
    img:"",
    google_token:"",
    token:"",
    error:false
};

export function user(state = initialState, action) {
    switch (action.type) {
        case USER_REQ_RESET:
            localStorage.clear('user');
            return {...state, name: "", error:false, token: "",google_token: ""};
        case USER_REQ_SUCCES:
            return {...state, name: action.payload.name, img: action.payload.img, google_token: action.payload.google_token};
        case USER_REQ_TOKEN_SUCCESS:
            return {...state, token: action.payload };
        case USER_REQ_TOKEN:
            return {...state };

        default:
            return state;
    }
}