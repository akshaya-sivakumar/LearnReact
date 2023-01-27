import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Http from './http_example'
import Image from './image_example'



const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "Http" component = {Http} title = "Http" initial = {true} />
         <Scene key = "Image" component = {Image} title = "Image" />
      </Scene>
   </Router>
)
export default Routes