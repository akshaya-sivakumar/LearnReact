import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonWidget from '../../../components/button_example';
import { login, otpValidation } from '../actions';
import { loginstore, otpstore } from '../store';
import { OtpState } from './otpTypes';


type RouteParams = {
    mobile: string;

};

const OtpValidation = () => {

    const route = useRoute();
    const params = route.params as RouteParams;
    const { loading, error, success } = useSelector((state: OtpState) => state)
    const [pin, setPin] = useState(['', '', '', '']);
    const inputs = useRef<TextInput[]>([]);
    const navigation = useNavigation<StackNavigationProp<Record<string, object | undefined>>>();



    useEffect(() => {

        if (error != null && !success) {
            setPin(['', '', '', ''])
            ToastAndroid.show(error.message, ToastAndroid.SHORT);

            otpstore.dispatch({ type: 'FETCH_DATA_RESET', payload: null });

            inputs.current[0]?.focus()
        }

        if (pin.join("").length === 4 && !pin.includes("") && error == null) {
            otpstore.dispatch(otpValidation(pin.join("")))
        }



        if (success) {
            //  setPin(['', '', '', ''])
            navigation.navigate("Watchlist")

        }



    }, [pin, error, success]);

    const handleChange = (text: string, index: number) => {



        const newOtpValue = [...pin];
        newOtpValue[index] = text;



        if (text == "") {

            inputs.current[index - 1]?.focus();
        } else { inputs.current[index + 1]?.focus(); }





        setPin(newOtpValue);







    };






    return (
        <View style={{ flexDirection: 'column', alignSelf: 'center', paddingTop: 80 }}>

            <Modal visible={loading} animationType="fade" transparent>
                <View style={styles.backdrop}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            </Modal>
            <View>

                <Text style={{ color: "black", fontSize: 20 }} >OTP Verification</Text>
                <Text style={{ color: "grey", fontSize: 17 }}>OTP will be automatically verified</Text></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                {[0, 1, 2, 3].map(index => (
                    <TextInput
                        key={index}
                        style={{ backgroundColor: 'rgba(52, 52, 52, 0.05)', padding: 5, width: 40, height: 40, borderWidth: 0.4, margin: 10, borderRadius: 5, borderColor: 'rgba(52, 52, 52, 0.5)', }}
                        maxLength={1}
                        defaultValue={pin[index]}


                        textAlign={'center'}
                        keyboardType="number-pad"
                        ref={input => (inputs.current[index] = input!)}

                        onChangeText={text => handleChange(text, index)}

                    />
                ))}
            </View>
            <View style={{ paddingTop: 50 }}>
                <ButtonWidget bgColor={"transparent"} btnLabel="Resend otp" onpress={() => {

                    loginstore.dispatch(login(params.mobile))
                }} textColor={"blue"}></ButtonWidget>
            </View>
        </View>
    );
};

export default OtpValidation;

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});






