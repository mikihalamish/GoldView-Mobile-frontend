import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './screens/Routes'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, Button } from "react-native-elements";
import Departments from "./screens/Departments";
import { NativeRouter, Route, Link } from "react-router-native";
import BreathingMachineScreen from './screens/BreathingMachineScreen'

const routes = [
  {
    path: "/departments",
    component: Departments
  },
  {
    path: "/breathingMachineScreen",
    component: BreathingMachineScreen
  }
];

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header
        centerComponent={{ text: "GoldControl", style: { color: "#fff" } }}
      />

      <NativeRouter>

        <Link to="/departments" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>departments</Text>
        </Link>
        <Link to="/breathingMachineScreen" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>breathingMachineScreen</Text>
        </Link>

        {routes.map((route, i) => (
          <Routes key={i} {...route} />
        ))}
      </NativeRouter>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
