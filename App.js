import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./screens/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Button } from "react-native-elements";
import { NativeRouter, Route, Link } from "react-router-native";
import BreathingMachineScreen from './screens/BreathingMachineScreen'
import PetientInfo from './screens/PetientInfo.js';
import Main from './screens/Main.js'
import NewPatient from "./screens/NewPatient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faHeartbeat,
  faHospitalUser
} from "@fortawesome/free-solid-svg-icons";

const routes = [
  {
    path: "/main",
    component: Main
  },
  {
    path: "/breathingMachineScreen",
    component: BreathingMachineScreen
  },
  {
    path: "/newPatient",
    component: NewPatient
  }
];

const patient = {
  id: "123456789",
  first_name: "Oded",
  last_name: "Zilkha Blayberg",
  birth_date: "2001-12-26",
  contact_name: "aaa",
  contact_phone_number: "0580000000",
  reception_date: "2021-06-09",
  release_date: "2021-06-09",
  room_id: 1
};

// const theme = {
//   colors: {

//   },
// };

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
            <Link
              to="/breathingMachineScreen"
              underlayColor="white"
              style={styles.navItem}
            >
              <FontAwesomeIcon size={32} icon={faHeartbeat} />
            </Link>
            <Link to="/main" underlayColor="#f0f4f7" style={styles.navItem}>
              <FontAwesomeIcon size={32} icon={faHome} />
            </Link>
            <Link
              to="/newPatient"
              underlayColor="#f0f4f7"
              style={styles.navItem}
            >
              <FontAwesomeIcon size={32} icon={faHospitalUser} />
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
    display: "flex",
    height: "100%"
  },
  screens: {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    justifyContent: "space-around",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    shadowRadius: 10,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 0,
      height: -10
    }
  },
  btnTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  navItem: {
    height: "50%",
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "auto",
    textAlign: "center",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white"
  }
});
