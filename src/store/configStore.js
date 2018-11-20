import { applyMiddleware, createStore } from "redux";
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));