import axios from 'axios';

export const NEWS_REQ_FEEDS = "NEWS_REQ_FEEDS";
export const NEWS_REQ_FEEDS_SUCCES = "NEWS_REQ_FEEDS_SUCCES";
export const NEWS_REQ_FEEDS_FAIL = "NEWS_REQ_FEEDS_FAIL";

export const NEWS_REQ_DEL = "NEWS_REQ_DEL";
export const NEWS_REQ_DEL_SUCCES = "NEWS_REQ_DEL_SUCCES";
export const NEWS_REQ_DEL_FAIL = "NEWS_REQ_DEL_FAIL";

export const NEWS_REQ_SAVE = "NEWS_REQ_SAVE";
export const NEWS_REQ_SAVE_SUCCES = "NEWS_REQ_SAVE_SUCCES";
export const NEWS_REQ_SAVE_FAIL = "NEWS_REQ_SAVE_FAIL";

export const PATH = 'http://localhost:5000/api/v1';

export function getAllNews() {
    return dispatch =>{
        dispatch({type:NEWS_REQ_FEEDS});

        axios.get(PATH+'/feeds')
            .then(res=>dispatch({type:NEWS_REQ_FEEDS_SUCCES,payload:res.data.feeds}))
            .catch(()=>dispatch({type:NEWS_REQ_FEEDS_FAIL, payload: "Ошибка: запрос новостей"}))
    }
}

export function delNews(id) {
    return (dispatch,getState)=>{
        dispatch({type:NEWS_REQ_DEL});
        const { token } = getState().user;
        axios({
            method:"delete",
            url:PATH+'/feeds/'+id,
            headers:{
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
            }
        })
            .then(
                r=>dispatch({type:NEWS_REQ_DEL_SUCCES,payload:id}),
                ()=>dispatch({type:NEWS_REQ_DEL_FAIL, payload: "Ошибка: удаление не удалось"})
            )
    }
}

export function saveFeed(id,feed) {
    return (dispatch,getState)=>{
        dispatch({type:NEWS_REQ_SAVE});
        const { token } = getState().user;
        axios({
            method:"put",
            url:PATH+'/feeds/'+id,
            headers:{
                'Access-Control-Allow-Headers': 'x-access-token',
                'x-access-token': token
            },
            data: feed
        })
            .then(
                ()=>dispatch({type:NEWS_REQ_SAVE_SUCCES, payload:{id,feed}}),
                ()=>dispatch({type:NEWS_REQ_SAVE_FAIL, payload: "Ошибка: изменение удалось"})
            )
    }
}