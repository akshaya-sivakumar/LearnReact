import React from "react";

import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';


class HttpExample extends React.Component{
    state = {
        loading:false,
        data: ''
     }
     componentDidMount = () => {
        this.setState({loading:true})
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({loading:false})
           console.log(responseJson);
           this.setState({
              data: responseJson
           })
        })
        .catch((error) => {
            this.setState({loading:false})
           console.error(error);
        });
     }





render() {
      return (

        this.state.loading?  <ActivityIndicator style={styles.container} size="large" color="#0000ff" /> :
       
         <View style={styles.container}>
            <Text>
               {this.state.data.body}
            </Text>
         </View>
      )
   }
}
export default HttpExample


const styles = StyleSheet.create ({
    container: {
       height: Dimensions.get('window').height,
        justifyContent: 'center',alignItems:'center'
      },
      
 })