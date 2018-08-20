import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
const store = createStore(playlist);

function playlist(state=[],action){
    if (action.type==='ADD_TRACK'){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

store.subscribe(()=>{
    console.log('subscribe',store.getState());
});

store.dispatch({type:"ADD_TRACK",payload:"Smells like spirit"});
store.dispatch({type:"ADD_TRACK",payload:"Enter Sandman"});

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));