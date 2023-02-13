import { Provider } from 'react-redux';
import LoginNew from './login/login_new';
import OtpValidation from './otp/otp_validation';
import SocketScreen from './socket_ui/socket_page';
import { loginstore, otpstore, socketstore, store } from './store';
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


export const OtpPage = () => {
    return (
        <Provider store={otpstore}>

            <OtpValidation />

        </Provider>


    );
};

export const SocketPage = () => {
    return (
        <Provider store={socketstore}>

            <SocketScreen />

        </Provider>


    );
};