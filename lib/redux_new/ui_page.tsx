import React from 'react';
import { Provider } from 'react-redux';
import { fetchData } from './actions';
import MyComponent from './mycomponent';

import { store } from './store';


const UiNew = () => {



    React.useEffect(() => {
        store.dispatch(fetchData());
    }, []);

    return (
        <Provider store={store}>
            <MyComponent></MyComponent>

        </Provider>
    );
};

export default UiNew;


