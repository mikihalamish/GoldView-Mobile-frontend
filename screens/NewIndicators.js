import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Input, Card, Button, Switch } from 'react-native-elements';

export default function NewIndicators() {
    const [sturgeon, setSturgeon] = useState(0);
    const [pulse, setPulse] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [degree, setDegree] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>New Indicators</Text>
                <Card>
                    <Input
                    label="Sturgeon"
                    onChangeText={text => sturgeon}
                    />
                    <Input
                    label="Pulse"
                    value={pulse}
                    />
                    <Input
                    label="Blood pressure"
                    value={bloodPressure}
                    />
                    <Input
                    label="Degree"
                    value={degree}
                    />
                    <Text style={{fontSize: 17, marginBottom: 10,}}>
                        Is being aired
                        <Switch value={true} />
                    </Text>
                </Card>
            </ScrollView>
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