import React from 'react'
import { Router } from 'react-native-router-flux'




const Routes = () => (
   <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
     
    </Stack>
  </Router>
)
export default Routes