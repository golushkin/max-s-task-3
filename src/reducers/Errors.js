import {NEWS_REQ_DEL_FAIL, NEWS_REQ_FEEDS_FAIL, NEWS_REQ_SAVE_FAIL} from "../actions/News";
import {USER_REQ_FAIL, USER_REQ_TOKEN_FAIL} from "../actions/User";


const initialState = {
    error: ""
};

export function errors(state = initialState, action) {
    switch (action.type) {
        case NEWS_REQ_DEL_FAIL:
            return {...state, error: action.payload }
        case NEWS_REQ_FEEDS_FAIL:
            return {...state, error: action.payload }
        case USER_REQ_TOKEN_FAIL:
            return {...state, error: action.payload }
        case USER_REQ_FAIL:
            return {...state, error: action.payload }
        case NEWS_REQ_SAVE_FAIL:
            return {...state, error: action.payload};
        default:
            return state;
    }
}