import React from 'react'
import { StyleSheet, Switch, View } from 'react-native'

export default SwitchExample = (props) => {
    return (
       <View style = {styles.container}>
          <Switch
          onValueChange = {(value)=>  props.toggleSwitch1(value)}
          value = {props.switch1Value}/>
       </View>
    )
 }


const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 100
    }
 })