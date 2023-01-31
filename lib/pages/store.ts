import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './login/loginReducer';
import { reducer } from './watchlist/reducer';


const rootReducer = combineReducers({
    watchlist: reducer,
    login: loginReducer,
  });
  

export const store = createStore(rootReducer, applyMiddleware(thunk));


