import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import LoginNew from './lib/pages/login/login_new';
import { store } from './lib/pages/store';
import Watchlist from './lib/pages/watchlist/watchlist';


const Stack = createStackNavigator();
function App() {





   return (
      <Provider store={store}>
         <NavigationContainer>

            <Stack.Navigator initialRouteName="Login">

               <Stack.Screen name="Watchlist" component={Watchlist} />
               <Stack.Screen name="Login" component={LoginNew} />



            </Stack.Navigator>


         </NavigationContainer>
      </Provider>


      /*  <Provider store={store}>
          <Watchlist></Watchlist>
 
       </Provider> */
   );
};

export default App;