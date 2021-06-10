import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Keyboard,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";



const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function App({setValid}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/logo.jpeg")} />
                <StatusBar style="auto" />
                <View style={styles.inputView}>

                    <TextInput
                        maxLength={9}
                        keyboardType='numeric'
                        style={styles.TextInput}
                        placeholder="enter ID"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />


                </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="enter password"
                    placeholderTextColor="#003f5c"
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}
            onPress={() => setValid(true)}>
                <Text style={styles.loginText}
               
                >LOGIN</Text>
            </TouchableOpacity>
    </View>
    </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },


    inputView: {
        backgroundColor: "#dcdcdc",
        borderRadius: 20,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 60,
        flex: 1,
        padding: 10,
    },

    image: {
        width: 300,
        height: 120,
        marginBottom: 20
    },

    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#add8e6",
    },
});