import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './login/loginReducer';
import { otpreducer } from './otp/otpReducer';
import { socketreducer } from './socket_ui/socket_reducer';


import { reducer } from './watchlist/reducer';





export const store = createStore(reducer, applyMiddleware(thunk));
export const loginstore = createStore(loginReducer, applyMiddleware(thunk));

export const otpstore = createStore(otpreducer, applyMiddleware(thunk));

export const socketstore = createStore(socketreducer, applyMiddleware(thunk));
