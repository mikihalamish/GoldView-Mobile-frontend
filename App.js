import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './screens/Routes'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Button } from "react-native-elements";
import { NativeRouter, Route, Link } from "react-router-native";
import BreathingMachineScreen from './screens/BreathingMachineScreen'
import PetientInfo from './screens/PetientInfo.js';
import Main from './screens/Main.js'

const routes = [
  {
    path: "/main",
    component: Main
  },
  {
    path: "/breathingMachineScreen",
    component: BreathingMachineScreen
  },

];

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
    <SafeAreaProvider style={styles.container}>
      <Header
        centerComponent={{ text: "GoldControl", style: { color: "#fff" } }}
      />
      <View style={styles.screens}>
        <NativeRouter>

          {routes.map((route, i) => (
            <Routes key={i} {...route} />
          ))}

          <View style={styles.buttons}>
            <Link to="/breathingMachineScreen" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text style={styles.btnTitle}>Breathing Machines</Text>
            </Link>
            <Link to="/main" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text style={styles.btnTitle}>Departments</Text>
            </Link>

          </View>

        </NativeRouter>
      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: 'flex',
    height: '100%'
  },
  screens: {
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex'
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    height: '20%',
    justifyContent: "space-around",
    backgroundColor: "white",
    alignItems: 'center',
    width: '100%'
  },
  btnTitle: {
    fontSize: 20,
    fontWeight: "bold"

  },
  navItem: {
    height: '50%',
    width: '30%',
    backgroundColor: '#2089dc',
    borderRadius: 25,
    width: "auto",
    textAlign: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white'
  }
});
