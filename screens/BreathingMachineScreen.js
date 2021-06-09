import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import {
  ListItem,
  Avatar,
  Card,
  Button,
  Overlay,
  Input
} from "react-native-elements";

class BreathingMachineScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vents: {}, visible: false };
  }

  componentDidMount() {
    // call the api to get the free vents
  }

  toggleOverlay = () => {
    this.setState({ visible: !this.state.visible });
  };

  renderListItem = vent => {
    return (
      <TouchableOpacity onPress={this.toggleOverlay}>
        <View style={styles.listItem}>
          <Text>department</Text>
          <Text>A102</Text>
        </View>
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
          <Text>Insert patient ID:</Text>
          <Input placeholder="BASIC INPUT" />
          <Button title="SAVE" onPress="" />
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 50,
    marginVertical: 10,
    shadowRadius: 20,
    height: 150,
    shadowColor: "black"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20
  },
  overlay: {
    width: 200,
    height: 200,
    display: "flex"
  }
});

export default BreathingMachineScreen;
