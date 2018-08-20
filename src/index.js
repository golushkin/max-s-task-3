import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);