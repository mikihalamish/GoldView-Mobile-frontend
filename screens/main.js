import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Departments from "./Departments";
/* 
const stages = [
    {
        "index": 0,
        "name": <Departments stage={stage}></Departments>
    }
] */

const Main = () => {
 
    const [stage, setStage] = useState(0)
    const [patient, setPatient] = useState('098776655')
    
    return (
        <>
        <Departments setStage={setStage} setPatient={setPatient}></Departments>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      /* display: 'flex',
      height: '100%' */
    },
  });

export default Main