import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, ScrollView, Button, TouchableOpacity } from 'react-native';
/* import { Picker } from '@react-native-picker/picker'; */
import departmentsJson from "../data/departments.json"

const Departments = () => {
    return (
        <View style={styles.departments}>
            <Text style={styles.mainTitle}>Department</Text>
            <ScrollView style={styles.scroll}>
                {departmentsJson.data.map((dep) => {
                    return (
                        <TouchableOpacity key={dep.id} style={styles.depButton} >
                            <Text style={styles.text}>{dep.name}</Text>
                        </TouchableOpacity>
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
        height: '90%',
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
    scroll: {
    }
});

export default Departments