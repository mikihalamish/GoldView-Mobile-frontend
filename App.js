import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import BreathingMachineScreen from "./screens/BreathingMachineScreen.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header
        centerComponent={{ text: "GoldControl", style: { color: "#fff" } }}
      />
      <BreathingMachineScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
