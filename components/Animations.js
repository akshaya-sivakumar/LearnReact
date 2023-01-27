import React from "react";
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
class Animations extends React.Component{

    UNSAFE_componentWillMount = () => {
        this.animatedWidth = new Animated.Value(50)
        this.animatedHeight = new Animated.Value(100)
     }

    animatedBox=()=>{
        Animated.timing(this.animatedWidth, {
            toValue: 200,
            duration: 1000,useNativeDriver: false
         }).start()
         Animated.timing(this.animatedHeight, {
            toValue: 500,
            duration: 500,
            useNativeDriver: false
         }).start()
    }

    render(){

        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
        return(
            <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
        )
    }

}

export default Animations

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100
   }
})