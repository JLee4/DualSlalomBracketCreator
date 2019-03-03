import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text, Picker, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Avatar } from "react-native-elements";

import Spinner from "../components/Spinner";
import Button from "../components/Button";

class Race extends Component {
  constructor(props) {
    super(props);
  }

  state = {

  };

  async componentDidMount() {
      this.setState({

      });
  }

  render() {
    if (this.state.loading)
      return (
        <View style={styles.spinnerContainer} >
          <Spinner show />
        </View >
      );

    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Avatar
                activeOpacity={0.7}
                rounded
                xlarge
                title={this.state.first[0] + this.state.last[0]}
              />
            </View>
          </View>
          <Button style={styles.editButton}
                  onPress={() => this.setState({ editing: !this.state.editing, editingTeam: false, editingProgram: false })}>
            <Text style={styles.editButtonText}>{this.state.editing ? "Stop Editing" : "Edit Profile Info"}</Text>
          </Button>
          <View style={styles.displayContainer}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ width: 75, marginTop: 4, fontSize: 16 }}>First: </Text>
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                fontSize={25}
                onChangeText={first => this.setState({ first })}
                placeholder="John"
                style={this.state.editing ? styles.editingTextBox : styles.regularTextBox}
                value={this.state.first}
                editable={this.state.editing}
                selectTextOnFocus={this.state.editing}
              />
            </View>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ width: 75, fontSize: 16, alignItems: "center" }}>Last: </Text>
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                fontSize={25}
                onChangeText={last => this.setState({ last })}
                placeholder="Doe"
                style={this.state.editing ? styles.editingTextBox : styles.regularTextBox}
                value={this.state.last}
                editable={this.state.editing}
                selectTextOnFocus={this.state.editing}
              />
            </View>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ width: 75, fontSize: 16 }}>Email: </Text>
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                fontSize={16}
                onChangeText={email => this.setState({ email })}
                placeholder="email@email.com"
                style={this.state.editing ? styles.editingTextBox : styles.regularTextBox}
                value={this.state.email}
                editable={this.state.editing}
                selectTextOnFocus={this.state.editing}
              />
            </View>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ width: 75, fontSize: 16 }}>Team: </Text>
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                fontSize={16}
                onChangeText={team => this.setState({ team })}
                placeholder="None"
                style={this.state.editing ? styles.editingTextBox : styles.regularTextBox}
                value={this.state.team}
                editable={this.state.editing}
                selectTextOnFocus={this.state.editing}
              />
            </View>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ width: 75, marginTop: 4, fontSize: 16 }}>Program: </Text>
              {this.state.editing && this.state.editingProgram ? (
                <Picker
                  style={{ flex: 1, marginLeft: 4, marginTop: 4 }}
                >
                  <Picker.Item label="None" value={null} />
                </Picker>
              ) : (
                <Text style={{ flex: 1, marginLeft: 4, marginTop: 4, fontSize: 16 }}>
                </Text>)
              }
              {this.state.editing && !this.state.editingProgram ? (
                <Button onPress={() => this.setState({ editingProgram: true })} style={{ backgroundColor: "red", marginTop: 4, paddingHorizontal: 5 }}>
                  <Text style={{ color: "white", fontSize: 16 }}>Edit Program</Text>
                </Button>
              ) : null}
            </View>
          </View>
          {this.state.editing && (
            <Button style={styles.editButton}>
              <Text style={styles.editButtonText}>Save Changes</Text>
            </Button>
          )}
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
  },
  avatarContainer: {
    padding: 30,
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },
  displayContainer: {
    flexDirection: "column",
  },
  spinnerContainer: {
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  editButton: {
    width: "100%",
    height: 20
  },
  editButtonText: {
    textAlign: "center",
    fontSize: 12,
    color: "#3080C0"
  },
  editingTextBox: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    marginBottom: 3,
    padding: 3,
    backgroundColor: "lightgrey"
  },
  regularTextBox: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0)",
    marginBottom: 3,
    padding: 3
  }
});

export default function RaceScreen(navigationOptionsFunc) {
  return createStackNavigator(
    { Race: { screen: Race } },
    { navigationOptions: navigationOptionsFunc },
  );
}
