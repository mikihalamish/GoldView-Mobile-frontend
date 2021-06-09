import React from "react";
import axios from "axios";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Button, Overlay, Input } from "react-native-elements";
import { Card } from "react-native-elements/dist/card/Card";

const serverUrl =
  "http://gold-view-server-goldview.apps.openforce.openforce.biz";

class BreathingMachineScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vents: {},
      visible: false,
      id: "",
      currentModalVent: {},
      idError: ""
    };
    this.loadVentsFromServer();
  }

  loadVentsFromServer = async () => {
    const res = await axios.get(`${serverUrl}/vents`);
    if (res.status === 200) {
      this.setState({ vents: res.body });
    }
  };

  save = async () => {
    // send request to the api
    const currentVent = this.state.currentModalVent;
    const id = this.state.id;
    const res = await axios.patch(`${serverUrl}/vents/`);

    await this.loadVentsFromServer();
    this.setState({ visible: false });
  };

  toggleOverlay = vent => {
    this.setState({
      visible: !this.state.visible,
      currentModalVent: this.state.visible ? {} : vent,
      id: ""
    });
  };

  renderListItem = vent => {
    return (
      <TouchableOpacity onPress={() => this.toggleOverlay(vent)}>
        <Card containerStyle={styles.listItem} borderRadius={30}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>Surgery</Text>
          <Text
            style={{ fontSize: 20, textAlign: "center", fontWeight: "100" }}
          >
            A102
          </Text>
        </Card>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Breathing Machine</Text>
        <FlatList
          data={[
            { dept: "Devin", bed: "A123" },
            { dept: "Afsdfg", bed: "V1A3" },
            { dept: "Vsad", bed: "AG24" },
            { dept: "Efgds", bed: "A122" },
            { dept: "Devin", bed: "A123" },
            { dept: "Afsdfg", bed: "V1A3" },
            { dept: "Vsad", bed: "AG24" },
            { dept: "Efgds", bed: "A122" },
            { dept: "Devin", bed: "A123" },
            { dept: "Afsdfg", bed: "V1A3" },
            { dept: "Vsad", bed: "AG24" },
            { dept: "Efgds", bed: "A122" },
            { dept: "Devin", bed: "A123" },
            { dept: "Afsdfg", bed: "V1A3" },
            { dept: "Vsad", bed: "AG24" },
            { dept: "Efgds", bed: "A122" }
          ]}
          renderItem={({ vent }) => this.renderListItem(vent)}
          keyExtractor={(vent, index) => index.toString()}
          marginBottom={175}
        />
        <Overlay
          isVisible={this.state.visible}
          onBackdropPress={this.toggleOverlay}
          overlayStyle={styles.overlay}
        >
          <Text
            style={{ textAlign: "center", fontSize: 20, marginVertical: 20 }}
          >
            Insert patient ID
          </Text>
          <Input
            placeholder="Patient ID"
            onChangeText={id => this.setState({ id: id })}
            keyboardType="number-pad"
            maxLength={9}
            value={this.state.id}
          />
          <Button
            title="SAVE"
            onPress={() => this.save()}
            style={{
              marginBottom: 25,
              marginHorizontal: "auto"
            }}
            buttonStyle={{ paddingHorizontal: 30 }}
            disabled={this.state.id.length != 9}
          />
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 30,
    marginVertical: 20,
    shadowRadius: 5,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.2,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 0,
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold"
  },
  overlay: {
    width: "75%",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center"
  }
});

export default BreathingMachineScreen;
