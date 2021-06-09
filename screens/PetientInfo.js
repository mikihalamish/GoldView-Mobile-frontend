import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';

export default function PetientPage(props) {
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Patient</Text>
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
            value="12"
            disabled
            />
            <Input
            label="Last Pulse"
            value="54"
            disabled
            />
            <Input
            label="Last Blood pressure"
            value="2"
            disabled
            />

            <Text style={{fontSize: 17, marginBottom: 10,}}>Is being aired:
              <Text style={{color: 'red'}}> YES </Text>
              {/* <Text style={{color: 'green'}}> NO</Text> */}
            </Text>

            <View style={{marginTop: 10}}>
              <Button
              title="Stop Ventilation"
              buttonStyle={{
                borderColor: 'red',
                borderWidth: 3,
              }}
              titleStyle={{
                color: 'red',
              }}
              type='outline'
              />
            </View>

            <View style={{marginTop: 10}}>
              <Button
              title="New Indicators"
              type='outline'
              buttonStyle={{
                borderWidth: 3,
              }}
              />
            </View>
          </Card>
        </ScrollView>

        <Button
        title="Release Patient"
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
      fontSize: 25,
      paddingHorizontal: 10,
      textAlign: 'center',
    },
  });

  const claculateAge = (birthdate) => {
    var birthDate = new Date(birthdate);
    var difference = Date.now() - birthDate.getTime();
    var ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
