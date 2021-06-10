import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Login from "./screens/Login.js";
import Home from "./screens/home.js";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";

export default function App() {
  const [valid, setValid] = useState(false);

  return (
    <>
    {
      valid ? <Home></Home> : <Login setValid={setValid}></Login>
    }
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});