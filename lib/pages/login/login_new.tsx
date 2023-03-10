import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ImageBackground, Modal, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonWidget from '../../../components/button_example';
import { login } from '../actions';
import { loginstore } from '../store';

import { LoginState } from './loginTypes';








const LoginNew = () => {


    const { data, loading, error, success } = useSelector((state: LoginState) => state)


    const navigation = useNavigation<StackNavigationProp<Record<string, object | undefined>>>();


    const [mobileNumber, setMobilenumber] = useState(
        ""
    );
    const [code, setcode] = useState(
        ""
    );

    useEffect(() => {
        if (error) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
            loginstore.dispatch({ type: 'FETCH_DATA_RESET', payload: null })

        }
        if (success) {

            navigation.navigate("Otp", {
                mobile: mobileNumber,

            })
        }
    }, [success, error])







    return (
        <ImageBackground source={{ uri: "https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg" }}>

            <View style={{ paddingHorizontal: 30, justifyContent: 'center', height: Dimensions.get('window').height, flexDirection: "column", }}>

                <Modal visible={loading} animationType="fade" transparent>
                    <View style={styles.backdrop}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                </Modal>
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
                    <ButtonWidget
                        onpress={() => {

                            loginstore.dispatch(login(mobileNumber))

                        }} bgColor={"#00bfff"} textColor={"white"} btnLabel="Login" />
                </View>
            </View >
        </ImageBackground>
    )
}
export default LoginNew;


const styles = StyleSheet.create({

    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        height: Dimensions.get('window').height,
        justifyContent: 'center', alignItems: 'center'
    },
    row: {
        alignItems: "center",
        paddingBottom: 20,
        justifyContent: 'space-evenly',

        flexDirection: 'row',
    },
    codeInput: {
        color: "black",
        borderRadius: 10,

        height: 40, width: 50,
        borderColor: '#00bfff',
        borderWidth: 1.5
    },
    mobileInput: {
        color: "black",
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