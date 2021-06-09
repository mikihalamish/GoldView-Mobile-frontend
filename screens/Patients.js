import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Picker, ScrollView, Button, TouchableOpacity } from 'react-native';
/* import { Picker } from '@react-native-picker/picker'; */
import roomsJson from "../data/departments.json";
import { NativeRouter, Route, Link } from "react-router-native";

const serverUrl =
    "http://gold-view-server-goldview.apps.openforce.openforce.biz";


const Patient = ({ setPatient, room,setStage }) => {
    let buttonPressed = false;
    const [patients, setPatients] = useState([]);
   
    console.log(room)
    useEffect(() => {
        axios.get(`${serverUrl}/patients/room/${room}`).then(({data}) => setPatients(data));
    }, [])
    
    return (
        <>
        {patients.length > 0 ? <View style={styles.departments}>
            <Text style={styles.mainTitle}>Patient</Text>
            <Text style={{fontSize:20, marginBottom:20}}></Text>
            <ScrollView>
                {patients.map((patient) => { // ###
                    return (
                        <View>
                            <TouchableOpacity key={patient.id} style={styles.depButton} onPress={() => {
                                buttonPressed = !buttonPressed
                                setPatient(patient)
                                setStage(3)
                            }
                            }>
                                <Text style={styles.text}>{patient.firstName} {patient.lastName} </Text>
                                <Text style={{marginBottom:10}}> {patient.id}</Text>
                               
                            </TouchableOpacity>
                         
                        </View>

                    )
                })
                }

            </ScrollView>
        </View>: <Text>no patients in this room</Text>}
        
        </>
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
        marginBottom: 10,
        marginTop: 20,
        fontWeight: "bold",
    },

    text: {
        color: "black",
        fontSize: 30
    },

    depButton: {
      
        backgroundColor: "#F75E49",
        marginBottom: 40,
        width: 300,
        alignItems: "center",
        borderRadius: 22,


    },
    patientButton: {
    
        backgroundColor: "#F75E49",
        marginBottom: 40,
        width: 200,
        alignItems: "center",
        borderRadius: 22,
    }

});

export default Patient