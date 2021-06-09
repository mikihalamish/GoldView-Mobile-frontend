import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, ScrollView, Button, TouchableOpacity } from 'react-native';
/* import { Picker } from '@react-native-picker/picker'; */
import departmentsJson from "../data/departments.json";
import { NativeRouter, Route, Link } from "react-router-native";
import Departments from './Departments.js';
import Rooms from './Rooms.js';


const Main = () => {
    const [stage, setStage] = useState(0);
    const [patient, setPatient] = useState('098776655');
    const [department, setDepartment] = useState(0);
    const [room, setRoom] = useState(0);
    return (
        <View style={styles.container}>
            {stage === 0 ? <Departments setStage={setStage} setDepartment={setDepartment}></Departments> : stage === 1 ?
             <Rooms setRoom={setRoom}></Rooms> : <View></View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        /* display: 'flex',
        height: '100%' */
    },
});

export default Main