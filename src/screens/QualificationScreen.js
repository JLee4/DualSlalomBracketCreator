import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import { createStackNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Button from "../components/Button";

class Qualifications extends Component {
  constructor(props) {
    super(props);



    this.state = {
      loading: true,
    };
  }


  render() {

    return (
      <View>
        <View style={{ height: 50 }}>
          <View style={styles.header}>
            <Button onPress={() => undefined}>
              <Ionicons style={styles.searchButton} name="md-search" size={32} color="#9599a2" />
            </Button>
            <View style={styles.searchInputContainer}>
              <TextInput
                style={styles.searchInput}
                autoCapitalize="none"
                placeholder="Search"
                onChangeText={val => this.setState({ search: val })}
                value={this.state.search}
              />
            </View>
          </View>
        </View>

        {/* Hide the keyboard when we scroll so the user can dismiss the keyboard */}
        <ScrollView style={{ backgroundColor: "#9599a2" }}
                    onScrollBeginDrag={() => Keyboard.dismiss()}>
        </ScrollView>

      </View >
    );
  }
}

export default function QualificationScreen(navigationOptionsFunc) {
  return createStackNavigator(
    {
      Qualifications: { screen: Qualifications },
    },
    {
      navigationOptions: navigationOptionsFunc,
    }
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "stretch",
    backgroundColor: "#324151",
    height: 50
  },
  searchButton: {
    paddingRight: 10,
    width: 32,
    height: 32
  },
  searchInput: {
    borderRadius: 20,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
  },
  searchInputContainer: {
    flex: 1,
  },
  listCell: {
    height: 50,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  listCellText: {
    paddingLeft: 20,
    fontWeight: "600"
  }
});
