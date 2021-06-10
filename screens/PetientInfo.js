import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Input, Card, Chip, Button } from 'react-native-elements';
import axios from 'axios';


const serverUrl =
    "http://gold-view-server-goldview.apps.openforce.openforce.biz";

export default function PetientPage(props) {
  
    const releasePatient =  () => {
       axios.post(`${serverUrl}/patients/release/${props.patient.id}`).then(({data}) => {
         props.setStage(2)
       })
    }

    const stopVentilation = async () => {
     // props.setStage(2);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Patient</Text>

        <ScrollView>
          <Card>
            <Input
            label="Name"
            value={props.patient.firstName + " " + props.patient.lastName}
            disabled
            />
            <Input
            label="ID"
            value={props.patient.id}
            disabled
            />
            <Input
            label="Age"
            value={claculateAge(props.patient.birthDate).toString()}
            disabled
            />
            <Input
            label="Contact name"
            value={props.patient.contactName}
            disabled
            />
            <Input
            label="Contact phone"
            value={props.patient.contactPhoneNumber}
            disabled
            />
            <Input
            label="Arrival date"
            value={new Date(props.patient.receptionDate).toLocaleDateString()}
            disabled
            />
          </Card>

          <Card>
            <Input
            label="Last Sturgeon"
            value={new Date(props.patient.receptionDate).toLocaleDateString()}
            disabled
            />
            <Input
            label="Last Pulse"
            value={new Date(props.patient.receptionDate).toLocaleDateString()}
            disabled
            />
            <Input
            label="Last Blood pressure"
            value={new Date(props.patient.receptionDate).toLocaleDateString()}
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
              onPress={stopVentilation}
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
        onPress={releasePatient}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      justifyContent: 'center',
    
      height:'90%'
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
