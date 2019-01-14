import {
    NEWS_REQ_DEL,
    NEWS_REQ_DEL_FAIL,
    NEWS_REQ_FEEDS,
    NEWS_REQ_FEEDS_FAIL, NEWS_REQ_SAVE,
    NEWS_REQ_SAVE_FAIL
} from "../actions/News";
import {USER_REQ_FAIL, USER_REQ_RESET, USER_REQ_TOKEN, USER_REQ_TOKEN_FAIL} from "../actions/User";


const initialState = {
    error: {
        err_del: "",
        err_feed:"",
        err_token:"",
        err_user:"",
        err_save:""
    }
};

export function errors(state = initialState, action) {
    switch (action.type) {
        case NEWS_REQ_DEL:
            return {...state, error:{...state.error, err_del: ""}};
        case NEWS_REQ_FEEDS:
            return {...state, error:{...state.error, err_feed: ""}};
        case NEWS_REQ_SAVE:
            return {...state, error:{...state.error, err_save: ""}};
        case USER_REQ_TOKEN:
            return {...state, error:{...state.error, err_token: ""}};
        case USER_REQ_RESET:
            return {...state, error:{...state.error, err_user: ""}};
        case NEWS_REQ_DEL_FAIL:
            return {...state, error: {... state.error, err_del: action.payload} }
        case NEWS_REQ_FEEDS_FAIL:
            return {...state, error: {... state.error, err_feed: action.payload} }
        case USER_REQ_TOKEN_FAIL:
            return {...state, error: {... state.error, err_token: action.payload} }
        case USER_REQ_FAIL:
            return {...state, error: {... state.error, err_user: action.payload} }
        case NEWS_REQ_SAVE_FAIL:
            return {...state, error: {... state.error, err_save: action.payload} }
        default:
            return state;
    }
}