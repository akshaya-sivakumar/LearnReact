import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginPage, WatchlistPage } from './lib/pages/provider';


const Stack = createStackNavigator();
function App() {





   return (

      <NavigationContainer>

         <Stack.Navigator initialRouteName="Login">

            <Stack.Screen name="Watchlist" component={WatchlistPage} />
            <Stack.Screen name="Login" component={LoginPage} />



         </Stack.Navigator>


      </NavigationContainer>



      /*  <Provider store={store}>
          <Watchlist></Watchlist>
 
       </Provider> */
   );
};

export default App;