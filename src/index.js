import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import { store } from './store/configStore'
import {getServerToken, USER_REQ_SUCCES} from './actions/User';

if (localStorage.user){
    const { name, google_token, img } = JSON.parse(localStorage.getItem(('user')));
    store.dispatch({
        type:USER_REQ_SUCCES,
        payload:{
            name,
            google_token,
            img
        }
    });
    store.dispatch(getServerToken(google_token));
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);