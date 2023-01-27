import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

class Inputs extends Component{

    state = {
        email: '',
        password: ''
     }

handleMail=(text)=>{

    this.setState({email:text})

}

handlePassword=(text)=>{
    this.setState({password:text})
}

submit=(email,pwd)=>{
    console.warn(email);
    alert('email: ' + email + ' password: ' + pwd)
}



    render(){
        return (
          
            <View style={styles.container}>
                <TextInput style={styles.input}
                
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText={this.handleMail}
                
                >


                </TextInput>

                <TextInput 
                 underlineColorAndroid = "transparent"
                 placeholder = "Password"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText={this.handlePassword}
                
                style={styles.input}>

                    
                </TextInput>
                <TouchableOpacity style={styles.submitButton}
                

                onPress = {
                    () => this.submit(this.state.email, this.state.password)
                 }
                >
                  <Text style={styles.submitButtonText}
                 
                  
                  >Submit </Text>


                </TouchableOpacity>

                </View>
              
        )
    }
}

export default Inputs



const styles = StyleSheet.create({
    container: {
       paddingTop: 50
    },
    input: {
        padding:6,
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {alignItems:"center",
       
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })