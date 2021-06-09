import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Input, Card, Chip, Button } from 'react-native-elements';

export default function PetientPage(props) {
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Prtient</Text>

        <ScrollView>
          <Card>
            <Input
            label="Name"
            value={props.patient.first_name + " " + props.patient.last_name}
            disabled
            />
            <Input
            label="ID"
            value={props.patient.id}
            disabled
            />
            <Input
            label="Age"
            value={claculateAge(props.patient.birth_date).toString()}
            disabled
            />
            <Input
            label="Contact name"
            value={props.patient.contact_name}
            disabled
            />
            <Input
            label="Contact phone"
            value={props.patient.contact_phone_number}
            disabled
            />
            <Input
            label="Arrival date"
            value={new Date(props.patient.reception_date).toLocaleDateString()}
            disabled
            />
          </Card>

          <Card>
            <Input
            label="Last Sturgeon"
            value={new Date(props.patient.reception_date).toLocaleDateString()}
            disabled
            />
            <Input
            label="Last Pulse"
            value={new Date(props.patient.reception_date).toLocaleDateString()}
            disabled
            />
            <Input
            label="Last Blood pressure"
            value={new Date(props.patient.reception_date).toLocaleDateString()}
            disabled
            />
            <Chip
            buttonStyle={{
              backgroundColor: '#FF0000'
            }}
            title="Is being aired"
            />
          </Card>
        </ScrollView>

        <Button
        title="Solid Button"
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      paddingBottom: 100,
    },
    title: {
      color: '#000000',
      fontSize: 20,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });

  const claculateAge = (birthdate) => {
    var birthDate = new Date(birthdate);
    var difference = Date.now() - birthDate.getTime();
    var ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
