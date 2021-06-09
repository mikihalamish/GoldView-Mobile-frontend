import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
/* import { Picker } from '@react-native-picker/picker'; */
import departmentsJson from "../data/departments.json";
import { NativeRouter, Route, Link } from "react-router-native";

const serverUrl =
  "http://gold-view-server-goldview.apps.openforce.openforce.biz";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  axios
    .get(`${serverUrl}/departments/all`)
    .then(({ data }) => setDepartments(data));

  return (
    <View style={styles.departments}>
      <Text style={styles.mainTitle}>Departments</Text>
      <ScrollView style={styles.scroll}>
        {departments.map(dep => {
          return (
            <TouchableOpacity key={dep.id} style={styles.depButton}>
              <Text style={styles.text}>{dep.name}</Text>
              <Text style={styles.text}>{dep.hospital.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  departments: {
    backgroundColor: "#F0F0F0",
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  mainTitle: {
    fontSize: 50,
    marginBottom: 50,
    marginTop: 20,
    fontWeight: "bold"
  },

  text: {
    color: "black",
    fontSize: 25
  },

  depButton: {
    backgroundColor: "lightblue",
    marginBottom: 40,
    width: 300,
    alignItems: "center",
    borderRadius: 22
  },
  scroll: {}
});

export default Departments;
