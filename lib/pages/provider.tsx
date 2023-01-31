import { Provider } from 'react-redux';
import LoginNew from './login/login_new';
import { loginstore, store } from './store';
import Watchlist from './watchlist/watchlist';

export const WatchlistPage = () => {
    return (
        <Provider store={store}>
            <Watchlist />
        </Provider>
    );
};



export const LoginPage = () => {
    return (
        <Provider store={loginstore}>
            <LoginNew />
        </Provider>
    );
};