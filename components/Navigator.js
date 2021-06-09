import React from "react";

class Navigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.buttons}>
        <Link
          to="/breathingMachineScreen"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text style={styles.btnTitle}>Breathing Machines</Text>
        </Link>
        <Link to="/main" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.btnTitle}>Departments</Text>
        </Link>
      </View>
    );
  }
}
