import CheckBox from '@react-native-community/checkbox';
import * as React from 'react';
import { ActivityIndicator, Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonWidget from '../../components/button_example';



class LoginPage extends React.Component {
    state = {
        code: "",
        mobileNumber: "",
        loading: false
    }

    handlecode = (value: any) => {

        this.setState({ code: value })



    }

    handleMobile = (value: any) => {

        this.setState({ mobileNumber: value })

    }

    hanleSubmit = () => {

        console.warn("loading");
        this.setState({ loading: true });
    }

    render() {
        return (
            <View>
                {this.state.loading && <View style={styles.box}>
                    <ActivityIndicator

                        color='#bc2b78'
                        size="large"
                        style={styles.activityIndicator} />
                </View>
                }

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

                                        value={this.state.code}
                                        placeholderTextColor="grey"
                                        autoCapitalize="none"
                                        onChangeText={this.handlecode}

                                        style={styles.codeInput}>

                                    </TextInput>
                                    <TextInput underlineColorAndroid="transparent"
                                        value={this.state.mobileNumber}
                                        placeholder="Mobile Number"
                                        placeholderTextColor="grey"
                                        autoCapitalize="none"
                                        onChangeText={this.handleMobile}

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
                            <ButtonWidget onpress={this.hanleSubmit} bgColor={"#00bfff"} textColor={"white"} btnLabel="Login" />
                        </View>








                    </View >

                </ImageBackground>

            </View>





        );
    }

}

export default LoginPage


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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
})