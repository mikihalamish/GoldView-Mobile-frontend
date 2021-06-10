import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Picker, ScrollView, Button, TouchableOpacity } from 'react-native';
/* import { Picker } from '@react-native-picker/picker'; */
import roomsJson from "../data/departments.json";
import { NativeRouter, Route, Link } from "react-router-native";

const serverUrl =
    "http://gold-view-server-goldview.apps.openforce.openforce.biz";


const Rooms = ({ setRoom, department, setStage }) => {
    let buttonPressed = false;
    const [rooms, setRooms] = useState([]);
    console.log(department);

    useEffect(() => {
        axios.get(`${serverUrl}/rooms/department/${department}`).then(({data}) => setRooms(data));
    }, [])
    
    return (
        <View style={styles.departments}>
            <Text style={styles.mainTitle}>Rooms</Text>
            <Text style={{fontSize:20, marginBottom:20}}>{ rooms[0] ? rooms[0].department.name : ""} {rooms[0] ?rooms[0].department.hospital.name: ""}</Text>
            <ScrollView>
                {rooms.map((room) => { // ###
                    return (
                        <View>
                            <TouchableOpacity key={room.id} style={styles.depButton} onPress={() => {
                                buttonPressed = !buttonPressed
                                setStage(2)
                                setRoom(room.id)
                            }
                            }>
                                <Text style={styles.text}>{room.id} </Text>
                               
                            </TouchableOpacity>
                           
                           
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
        marginBottom: 10,
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
    
        backgroundColor: "#F75E49",
        marginBottom: 40,
        width: 200,
        alignItems: "center",
        borderRadius: 22,
    }

});

export default Rooms