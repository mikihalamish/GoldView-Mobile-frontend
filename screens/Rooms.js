import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, ScrollView, Button, TouchableOpacity } from 'react-native';
/* import { Picker } from '@react-native-picker/picker'; */
import roomsJson from "../data/departments.json";
import { NativeRouter, Route, Link } from "react-router-native";


const Rooms = ({setRoom}) => {
    let buttonPressed = false;
    return (
        <View style={styles.departments}>
            <Text style={styles.mainTitle}>Rooms</Text>
            <ScrollView>
                {roomsJson.data.map((room) => { // ###
                    return (
                        <View>
                        <TouchableOpacity key={room.id} style={styles.depButton} onPress={() => {
                            buttonPressed = !buttonPressed
                        }
                        }>
                            <Text style={styles.text}>{room.name}</Text>
                        </TouchableOpacity>
                        {buttonPressed ? <ScrollView>
                            {roomsJson.data.map((patient) => {
                                return(
                                <TouchableOpacity key={patient.id} style={styles.patientButton} onPress={() =>{
                                }}></TouchableOpacity>);
                            })}
                        </ScrollView> : <View></View>}
                        </View>
                        
                    )
                })
                }

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    departments: {
        backgroundColor: '#F0F0F0',
        display: 'flex',
        width: '100%',
        height: '80%',
        justifyContent: "center",
        alignItems: "center",


    },
    mainTitle: {
        fontSize: 50,
        marginBottom: 50,
        marginTop: 20,
        fontWeight: "bold",
    },

    text: {
        color: "black",
        fontSize: 30
    },

    depButton: {
        height: 50,
        backgroundColor: "#F75E49",
        marginBottom: 40,
        width: 300,
        alignItems: "center",
        borderRadius: 22,


    },
    patientButton: {
        height: 50,
        backgroundColor: "#F75E49",
        marginBottom: 40,
        width: 200,
        alignItems: "center",
        borderRadius: 22,
    }
    
});

export default Rooms