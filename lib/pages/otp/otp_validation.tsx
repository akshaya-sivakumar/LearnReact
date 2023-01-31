import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, ToastAndroid, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonWidget from '../../../components/button_example';
import { otpValidation } from '../actions';
import { otpstore } from '../store';
import { OtpState } from './otpTypes';


type RouteParams = {
    name: string;
    age: number;
};

const OtpValidation = () => {

    const route = useRoute();
    const params = route.params as RouteParams;
    const { loading, error, success } = useSelector((state: OtpState) => state)
    const [pin, setPin] = useState(['', '', '', '']);
    const inputs = useRef<TextInput[]>([]);
    const navigation = useNavigation<StackNavigationProp<Record<string, object | undefined>>>();



    useEffect(() => {


        if (pin.join("").length === 4) {

            console.warn(pin.join("").length)
            // otpstore.dispatch(otpValidation(pin.join("")))
            1


        }

        if (success) {
            navigation.navigate("Watchlist")

        }
        if (error) {
            setPin(['', '', '', ''])
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }


    }, [pin, success, error, params]);

    const handleChange = (text: string, index: number) => {

        ///setPin(text);

        const newOtpValue = [...pin];
        newOtpValue[index] = text;



        if (text == "") {

            inputs.current[index - 1]?.focus();
        } else { inputs.current[index + 1]?.focus(); }



        setPin(newOtpValue);





    };

    if (loading) {

        return (
            <View >
                <Text>Load</Text>
            </View>
        );
    }



    return (
        <View style={{ flexDirection: 'column', alignSelf: 'center', paddingTop: 80 }}>
            <View>

                <Text style={{ color: "black", fontSize: 20 }} >OTP Verification</Text>
                <Text style={{ color: "grey", fontSize: 17 }}>OTP will be automatically verified</Text></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                {[0, 1, 2, 3].map(index => (
                    <TextInput
                        key={index}
                        style={{ backgroundColor: 'rgba(52, 52, 52, 0.05)', padding: 5, width: 40, height: 40, borderWidth: 0.4, margin: 10, borderRadius: 5, borderColor: 'rgba(52, 52, 52, 0.5)', }}
                        maxLength={1}
                        textAlign={'center'}
                        keyboardType="number-pad"
                        ref={input => (inputs.current[index] = input!)}

                        onChangeText={text => handleChange(text, index)}

                    />
                ))}
            </View>
            <View style={{ paddingTop: 50 }}>
                <ButtonWidget bgColor={"transparent"} btnLabel="Resend otp" onpress={() => {

                    otpstore.dispatch(otpValidation(pin.join("")))
                }} textColor={"blue"}></ButtonWidget>
            </View>
        </View>
    );
};

export default OtpValidation;
