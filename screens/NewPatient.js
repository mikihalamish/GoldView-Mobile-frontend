import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Card, Button } from "react-native-elements";

export default function NewPatient() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>New Patient</Text>
        <Card>
          <Input label="Room" />
          <Input label="Department" />
          <Input label="Name" />
          <Input label="ID" />
          <Input label="Birth Date" />
          <Input label="Contact name" />
          <Input label="Contact phone" />
          <Input
            label="Arrival date"
            value={new Date().toLocaleDateString()}
            disabled
          />
          <Button title="Create" />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    height: "90%"
  },
  title: {
    color: "#000000",
    fontSize: 25,
    paddingHorizontal: 10,
    textAlign: "center"
  }
});

const claculateAge = birthdate => {
  var birthDate = new Date(birthdate);
  var difference = Date.now() - birthDate.getTime();
  var ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
