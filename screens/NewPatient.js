import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Card, Button } from "react-native-elements";
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

export default function NewPatient() {

  const [room, setRoom] = useState();
  const [department, setDepartment] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [id, setId] = useState();
  const [birthdate, setBirthdate] = useState(new Date());
  const [contactName, setContactName] = useState();
  const [contactPhone, setContactPhone] = useState();
  const [arrivalDate, setArrivalDate] = useState(new Date().toISOString().substring(0, 10));

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>New Patient</Text>
        <Card>
          <Input label="Room" value={room} onChangeText={room => setRoom(room)}/>
          <Input label="Department" value={department} onChangeText={department => setDepartment(department)}/>
          <Input label="First Name" value={firstName} onChangeText={firstName => setFirstName(firstName)} />
          <Input label="Last Name" value={lastName} onChangeText={lastName => setLastName(lastName)} />
          <Input label="ID" value={id} onChangeText={id => setId(id)} />
          <Text style={{fontSize: 16, marginBottom: 10, fontWeight: 'bold', color: '#7b8797'}}>Birth Date</Text>
          <DatePicker
          style={{width: '100%', marginBottom: 15}}
          date={birthdate}
          showIcon={false}
          mode="date"
          placeholder="Birth Date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {setBirthdate(date)}}
          />
          <Input label="Contact name" value={contactName} onChangeText={contactName => setContactName(contactName)} />
          <Input label="Contact phone" value={contactPhone} onChangeText={contactPhone => setContactPhone(contactPhone)} />
          <Input
            label="Arrival date"
            value={arrivalDate}
            disabled
          />
          <Button title="Create" onPress={() => {
            axios.post('http://gold-view-server-goldview.apps.openforce.openforce.biz/patients/', {
              id: id,
              firstName: firstName,
              lastName: lastName,
              birthDate: new Date(birthdate),
              contactName: contactName,
              contactPhoneNumber: contactPhone,
              receptionDate: new Date(arrivalDate),
              room: {
                id: room,
              },
            });
          }
          }/>
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
