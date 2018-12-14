import { combineReducers } from 'redux';
import { user } from './User';
import { news } from './News';
import { errors } from "./Errors";

export const rootReducer = combineReducers({
    user: user,
    news: news,
    errors: errors,
})