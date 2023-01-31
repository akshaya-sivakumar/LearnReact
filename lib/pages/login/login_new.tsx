import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonWidget from '../../../components/button_example';

import { LoginState } from './loginTypes';








const LoginNew = () => {
    const { data, loading, error, success } = useSelector((state: LoginState) => state)

    const isLoggedIn = useSelector((state: LoginState) => state.success);;
    const navigation = useNavigation<StackNavigationProp<Record<string, object | undefined>>>();


    const [mobileNumber, setMobilenumber] = React.useState(
        ""
    );
    const [code, setcode] = React.useState(
        ""
    );


    if (loading) {
        console.warn(loading)
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        console.warn(error)
        return (
            <View style={styles.container}>
                <Text>error</Text>
            </View>
        );
    }

    /*   React.useEffect(() => {
          console.warn(isLoggedIn)
          if (isLoggedIn) {
              navigation.navigate("Watchlist")
          }
      }, [isLoggedIn, navigation]) */







    return (






        <ImageBackground source={{ uri: "https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg" }}>

            <View style={{ paddingHorizontal: 30, justifyContent: 'center', height: Dimensions.get('window').height, flexDirection: "column", }}>


                <Text style={
                    { fontSize: 25, color: "black", paddingBottom: 20 }
                }>Enter Your Mobile Number
                </Text>
                <Text style={{ paddingBottom: 30, fontSize: 16, }}>A 6 digit OTP will be sent in SMS to verify your mobile number
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>

                    <View style={{ flexDirection: 'column', }}>

                        <Text style={{ paddingBottom: 10 }}>Phone number
                        </Text>
                        <View style={styles.row}>
                            <TextInput underlineColorAndroid="transparent"
                                placeholder="+91"

                                value={code}
                                placeholderTextColor="grey"
                                autoCapitalize="none"
                                onChangeText={(value) => {
                                    setcode(value)
                                }}

                                style={styles.codeInput}>

                            </TextInput>
                            <TextInput underlineColorAndroid="transparent"
                                value={mobileNumber}
                                placeholder="Mobile Number"
                                placeholderTextColor="grey"
                                autoCapitalize="none"
                                onChangeText={(value) => {
                                    setMobilenumber(value)
                                }}

                                style={styles.mobileInput}>

                            </TextInput>

                        </View>
                    </View>
                </View>


                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", alignContent: "center", paddingBottom: 20, paddingTop: 20, }}>
                    <CheckBox

                    />
                    <Text >
                        Agree to our Terms and Conditions
                    </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <ButtonWidget onpress={() => {
                        navigation.navigate("Watchlist")
                        // store.dispatch(login(mobileNumber))



                    }} bgColor={"#00bfff"} textColor={"white"} btnLabel="Login" />
                </View>








            </View >

        </ImageBackground>


    )
}




export default LoginNew;


const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    row: {
        alignItems: "center",
        paddingBottom: 20,
        justifyContent: 'space-evenly',

        flexDirection: 'row',
    },
    codeInput: {
        borderRadius: 10,

        height: 40, width: 50,
        borderColor: '#00bfff',
        borderWidth: 1.5
    },
    mobileInput: {
        borderRadius: 10,
        marginLeft: 10,
        height: 40, width: 200,
        borderColor: '#00bfff',
        borderWidth: 1.5
    },
    submitButton: {
        alignItems: "center",

        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    },

    box: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    activityIndicator: {
        opacity: 0.1,
        backfaceVisibility: "visible",
        flex: 1, backgroundColor: "grey",
        justifyContent: 'center',
        alignItems: 'center', width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})