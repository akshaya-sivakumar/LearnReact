import { Provider } from 'react-redux';
import LoginNew from './login/login_new';
import OtpValidation from './otp/otp_validation';
import { loginstore, otpstore, store } from './store';
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