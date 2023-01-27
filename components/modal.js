import React from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
//import { Modal } from "react-native-router-flux"

class ModalExample extends React.Component{

    state = {
        modalVisible: false,
     }

     toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }
    render(){
        return(
            <View>
                <Modal  animationType = {"slide"} transparent = {false}
                 visible = {this.state.modalVisible}
                 onRequestClose = {() => { console.log("Modal has been closed.") } }
                >

<View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>


                </Modal>

                <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>
                
            </View>

        )
    }
}

export default ModalExample


const styles = StyleSheet.create ({
    container: {
        alignContent:'center',
       
       alignItems: 'center',
       backgroundColor: '#ede3f2',
       padding: 100
    },
    modal: {
       flex: 1, alignContent:'center',
       alignItems: 'center',
       backgroundColor: '#f7021a',
       padding: 100
    },
    text: {
       color: '#3f2949',
       marginTop: 300
    }
 })