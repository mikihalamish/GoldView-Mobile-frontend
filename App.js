import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import PetientInfo from './screens/PetientInfo.js';

const patient = {
  "id": '123456789',
  "first_name": "Oded",
  'last_name': 'Zilkha Blayberg',
  'birth_date': '2001-12-26',
  'contact_name': 'aaa',
  'contact_phone_number': '0580000000',
  'reception_date': '2021-06-09',
  'release_date': '2021-06-09',
  'room_id': 1,
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Header
      centerComponent={{ text: 'GoldControl', style: styles.title }}
      />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <PetientInfo patient={patient}></PetientInfo>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
  }
});
