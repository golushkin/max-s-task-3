import { NEWS_REQ_FEEDS, NEWS_REQ_FEEDS_FAIL,
    NEWS_REQ_FEEDS_SUCCES, NEWS_REQ_DEL_FAIL,
    NEWS_REQ_DEL, NEWS_REQ_DEL_SUCCES, NEWS_REQ_SAVE,
    NEWS_REQ_SAVE_FAIL, NEWS_REQ_SAVE_SUCCES } from '../actions/News';

const initialState = {
    isLoad_news:false,
    save_success: false,
    feed_del:false,
    feeds:[],
};

export function news(state = initialState,action) {
    let new_feeds;
    switch (action.type) {
        case NEWS_REQ_FEEDS:
            return {...state, isLoad_news: true };
        case NEWS_REQ_FEEDS_SUCCES:
            return {...state, isLoad_news:false, feeds: action.payload };
        case NEWS_REQ_FEEDS_FAIL:
            return {...state, isLoad_news:false, error: true};
        case NEWS_REQ_DEL_SUCCES:
            new_feeds = state.feeds.filter(topic=> topic._id !== action.payload);
            return {...state, feeds: new_feeds, feed_del: true};
        case NEWS_REQ_DEL_FAIL:
            return {...state, error: true};
        case NEWS_REQ_DEL:
            return {...state, feed_del: false};
        case NEWS_REQ_SAVE:
            return {...state, save_success: false};
        case NEWS_REQ_SAVE_FAIL:
            return {...state,};
        case NEWS_REQ_SAVE_SUCCES:
            new_feeds = state.feeds.map((val)=>{
                if(val._id !== action.payload.id){
                    return val
                }
                else{
                    val.title = action.payload.feed.title
                    val.content = action.payload.feed.content
                    return val
                }
            });
            return {...state, save_success:true, feeds: new_feeds};
        default:
            return state;
    }
}