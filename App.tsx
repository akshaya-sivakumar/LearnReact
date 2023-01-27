import React from 'react';
import Inputs from './components/inputs';


 class App extends React.Component {

   /* constructor() {
      super();
      this.state = {
         switch1Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
   }
   render() {
      return (
         <View>
            <SwitchExample
            toggleSwitch1 = {this.toggleSwitch1}
            switch1Value = {this.state.switch1Value}/>
         </View>
      );
   } */

  
   render() {
      return (
         //<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        //<GeolocationExample/>
        <Inputs/>
      );
   } 
}

export default App

