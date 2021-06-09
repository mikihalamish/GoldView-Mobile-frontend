import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Departments from "./screens/Departments";

export default function App() {
  return (
    <View style={styles.container}>
    {/*   <Text style={styles.title}>Welcome To GoldView Mobile!</Text>
      <StatusBar style="auto" /> */}
      <Departments/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff'
  }
});
