
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Picker } from "@react-native-picker/picker";

class PickerExample extends React.Component{

    state = {user: ''}

    updateUser=(user)=>{

        this.setState({user:user})
    }

    render(){
        return(

            <View >
                <Picker selectedValue = {this.state.user} onValueChange = {(value)=>{
                            console.warn(value)
                    this.updateUser(value)}}
                
                style={styles.picker}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    text: {
       fontSize: 30,
       alignSelf: 'center',
       color: 'red',
       paddingTop:100
    },
    picker: {
alignContent:'center',marginTop:100
     
     },
    
 })

export default PickerExample