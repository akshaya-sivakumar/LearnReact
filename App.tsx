import React from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/pages/watchlist/store';
import Watchlist from './lib/pages/watchlist/watchlist';



const App = () => {





   return (
      <Provider store={store}>
         <Watchlist></Watchlist>

      </Provider>
   );
};

export default App;