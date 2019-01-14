import { NEWS_REQ_FEEDS,
    NEWS_REQ_FEEDS_SUCCES,
    NEWS_REQ_DEL, NEWS_REQ_DEL_SUCCES, NEWS_REQ_SAVE
    , NEWS_REQ_SAVE_SUCCES } from '../actions/News';

const initialState = {
    isLoad_news:false,
    save_success: false,
    feed_del:false,
    feeds:[],
};

export function news(state = initialState,action) {
    switch (action.type) {
        case NEWS_REQ_FEEDS:
            return {...state, isLoad_news: true };
        case NEWS_REQ_FEEDS_SUCCES:
            return {...state, isLoad_news:false, feeds: action.payload };
        case NEWS_REQ_DEL_SUCCES:
            return {...state, feed_del: true};
        case NEWS_REQ_DEL:
            return {...state, feed_del: false};
        case NEWS_REQ_SAVE:
            return {...state, save_success: false};
        case NEWS_REQ_SAVE_SUCCES:
            return {...state, save_success:true};
        default:
            return state;
    }
}