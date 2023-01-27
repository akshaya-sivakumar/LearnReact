import React from "react"
import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'


class ButtonExample extends React.Component{
    render(){
        return(

            <View style = {styles.container}>
         <TouchableNativeFeedback>
            <Text style = {styles.text}>
               Button
            </Text>
         </TouchableNativeFeedback>
      </View>

        )
    }
}


export default ButtonExample

const styles = StyleSheet.create ({
   container: {height: Dimensions.get('window').height,
      alignItems: 'center',justifyContent:'center'
   },
   text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red'
   }
})